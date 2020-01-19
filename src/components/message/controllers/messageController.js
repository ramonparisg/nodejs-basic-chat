const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.log("[messageController] Missing values");
      reject("Missing parameters");
      return false;
    }

    const fullMessage = {
      user: user,
      message: message,
      date: new Date()
    };

    resolve(fullMessage);
  });
};

module.exports = {
  addMessage
};
