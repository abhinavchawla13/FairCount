
function textLimit(){

  var mainText = document.getElementById("main_box").value;
  var word_lim_user = document.getElementById("count_input").value;
  var char_from_word_count = word_lim_user * 4;

  semiText = mainText.replace(/\s\s+/g, ' ');
  // replace multiple whitespaces whit single space

  document.getElementById("words_used").value = semiText.trim().split(" ").length;

  if (semiText.trim().split(" ")[0] === '')  {
    document.getElementById("words_left").value = word_lim_user;
  }
  else {

    document.getElementById("words_left").value = word_lim_user - semiText.trim().split(" ").length;
  }

  if (document.getElementById("words_left").value < 1) {
    document.getElementById("words_left").value = 0;
  }

  document.getElementById("char_left").value = char_from_word_count - mainText.length;
  var extra_words = mainText.trim().split(" ").length - word_lim_user;

  if (extra_words > 0){
    document.getElementById("words_extra").value = extra_words;
  }
  else {
    document.getElementById("words_extra").value = 0;
  }

  if (mainText.length > char_from_word_count) {
    if (document.getElementById("words_used").value === word_lim_user) {
      document.getElementById("main_box").value = mainText.split(" ").slice(0, word_lim_user).join(" ");
      if (mainText[-1] === " "){
        document.getElementById("main_box").value = mainText + " ";
      }
    }
    if (semiText.trim().split(" ").length > word_lim_user) {
      if (char_from_word_count - mainText.length === 0) {
        document.getElementById("main_box").value = mainText.substring(0, char_from_word_count - 1);
      }
      else {
        document.getElementById("main_box").value = mainText.substring(0, char_from_word_count);
      }
    }
  }
}
