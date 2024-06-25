const onMyBirthday = (isKayoSick) => {
  return new Promise((reslove, reject) => {
    if (isKayoSick) {
      reslove(1);
    } else {
      reject(new Error("Kayo is Sick"));
    }
  });
};
