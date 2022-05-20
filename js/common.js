$(function() {
  function splitLocation(el) {
    let href = el.attr("href").split("/");
    href = href[href.length - 1].split(".");
    href = href[0];
    return href;
  }
  let currentHref = splitLocation($(location));
  $("#lnb a").each(function() {
    if (splitLocation($(this)) == splitLocation($(location))) {
      $(this).addClass("on");
    }
  });

  function text_split(text) {
    text = text.split("/");
    text = text[text.length - 1].split(".");
    text = text[0];
  }
  // accoridion
  $(".accordion dd:not(:first)").css({
    "display": "none",
    "height": 0
  })
  let isAni = $("dd").is(":animated");
  if (!isAni) {
    $("dl dt").click(function() {
      let thisElem = $(this);
      if ($("+dd", thisElem).css("display") == "none") {
        $("dd").each(function() {
          if ($(this).css("display") == "block") {
            $(this).animate({
              height: 0
            }, 300, function() { // 숫자는 닫히는 시간
              $(this).css("display", "none");
            })
          }
        });
        $("+dd", thisElem).css("display", "block").animate({
          height: 300
        }, 1500); // 숫자는 열리는 시간
      }
    });
  }
});
