export const checkEmailFormat = (checkEmail: string) => {
    var validRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;
    if (checkEmail.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  };