//Changes Title Text
$(function(){
    var $title = $('#title');
    var $titleSpine = $('#title-spine p');
    var $titleFront = $('#title-front h2');
    function onChange() {
        $titleSpine.text($title.val());
        $titleFront.text($title.val());
    };
    $('#title')
        .change(onChange)
        .keyup(onChange);
});

//Changes SubTitle Text
$(function(){
    var $subTitle = $('#sub-title');
    var $subTitleSpine = $('#subtitle-spine p');
    var $subTitleFront = $('#subtitle-front h2');
    function onChange() {
        $subTitleSpine.text($subTitle.val());
        $subTitleFront.text($subTitle.val());
    };
    $('#sub-title')
        .change(onChange)
        .keyup(onChange);
});
//Changes Side A Tracklist
$(function(){
    var $aList = $('#a-list');
    var $aListFront = $('#a-tracklist p');
    function onChange() {
        $aListFront.text($aList.val());
    };
    $('#a-list')
        .change(onChange)
        .keyup(onChange);
});

//Changes Side B Tracklist
$(function(){
    var $bList = $('#b-list');
    var $bListFront = $('#b-tracklist p');
    function onChange() {
        $bListFront.text($bList.val());
    };
    $('#b-list')
        .change(onChange)
        .keyup(onChange);
});

//Changes Upper Note Text
$(function(){
    var $UpNoteInput = $('#note-top');
    var $UpNote = $('#noteTop-spine p');
    function onChange() {
        $UpNote.text($UpNoteInput.val());
    };
    $('#note-top')
        .change(onChange)
        .keyup(onChange);
});

//Changes Lower Note Text
$(function(){
    var $LowNoteInput = $('#note-bottom');
    var $LowNote = $('#noteBottom-spine p');
    function onChange() {
        $LowNote.text($LowNoteInput.val());
    };
    $('#note-bottom')
        .change(onChange)
        .keyup(onChange);
});

//Changes Front Page Font-Size
$(function(){
    var $FontInput = $('#font-size');
    var $FontSize = $('#front');
    function onChange() {
        $FontSize.css("font-size", $FontInput.val() + "px");
    };
    $('#font-size')
        .change(onChange)
        .keyup(onChange);
});