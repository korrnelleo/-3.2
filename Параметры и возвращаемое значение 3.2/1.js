function rep(likes, dislikes, massegesEdit, masseges) {
  if (masseges === 0) {
    return 0;
  } else if (dislikes > likes) {
    return "Коэффициент не применяется";
  } else if (likes > dislikes) {
    let coeff = (masseges - massegesEdit) / masseges;
    let reputation = coeff * (likes - dislikes);
    return reputation;
  }
}

console.log(rep(3, 1, 70, 800));
