const doUserLogOut = async function () {
    try {
      await Parse.User.logOut()
      const currentUser = await Parse.User.current()
      if (currentUser === null) {
        alert('Success! No user is logged in anymore!')
      }
      getCurrentUser()
      return true
    } catch (error) {
      alert(`Error! ${error.message}`)
      return false;
    }
  }