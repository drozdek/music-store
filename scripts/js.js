$(function () {

  /**
   * @constructor SongList
   */
  var SongList = function () {

    //define default props
    this.list = [
      {
        artistName: 'Bathory',
        genre: 'metal',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Album_Cover_of_Nordland_II.png/220px-Album_Cover_of_Nordland_II.png',
        yearOfRelease: '2003',
        spotifyLink: 'https://open.spotify.com/artist/6rBvjnvdsRxFRSrq1StGOM',
        artistAlbums: 'Nordland II'
      },
      {
        artistName: 'Darkthrone',
        genre: 'metal',
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Darkthrone_-_Arctic_Thunder_2016.jpg/220px-Darkthrone_-_Arctic_Thunder_2016.jpg',
        yearOfRelease: '2016',
        spotifyLink: 'https://open.spotify.com/album/5QodGMRBHTY7TJITR7blJA',
        artistAlbums: 'Arctic Thunder'
      }
    ]

  };

  /**
   * @method addSong - adds artist
   */
  SongList.prototype.addSong = function (val) {
    //  if (!this.list.hasOwnProperty(artist)) {
    //   this.list.name.push(val);
    // }

    this.list.push(val);
    console.log(JSON.stringify(this.list));
  };

  /**
   * @method displaySongList - displays list
   * @returns {obj} songList
   */
  SongList.prototype.displayList = function () {
    return songList.populateList();
  };

  /**
   * @method poulateList - populate list
   * 
   */
  SongList.prototype.populateList = function () {
    let $songList = $('#songList');

    function showArtistInformation(param) {
      var info = '';
      info = "<p>" + param.artistName + "</p>";
      info += "<p>" + param.genre + "</p>";
      info += "<img src='" + param.albumCover + "' />";
      info += "<p>" + param.yearOfRelease + "</p>";
      info += "<p><a href='" + param.spotifyLink + "' \n\
        target='_blank'>"+ param.spotifyLink + "</a></p>";
      info += "<p>" + param.artistAlbums + "</p>";
      return info
    }

    $.each(this.list, function (i, x) {
      $songList.append("<li>" + showArtistInformation(x) + "</li>");
    })
  };

  /**
   * instantiate @constructor
   */
  var songList = new SongList();
  songList.displayList();

  document.getElementById("send").addEventListener('click', function () {
    //helper function - return artists' input value
    var addVal = function (val) {
      return document.getElementById(val).value;
    }

    //populate object
    var obj = {};
    obj.artistName = addVal('artistName');
    obj.genre = addVal('genre');
    obj.albumCover = addVal('albumCover');
    obj.yearOfRelease = addVal('yearOfRelease');
    obj.spotifyLink = addVal('spotifyLink');
    obj.artistAlbums = addVal('artistAlbums');

    songList.addSong(obj);

    return false

  });

});

