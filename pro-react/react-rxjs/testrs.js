
const button = document.querySelector("button");
const div = document.querySelector("div");

const setText = (text) => {
  div.textContent = text
}

const checkAuth = cb => {
  setText('Checking Auth...')
  setTimeout(() => {
    cb(true);
  }, 2000);
};

const fetchUser = cb => {
  setText('Fetching User...')
  setTimeout(() => {
    cb({ name: "Max" });
  }, 2000);
};

button.addEventListener("click", () => {
  checkAuth(auth => {
    if (auth) {
      fetchUser(user => {
        setText(user.name)
      });
    }
  });
});


//////////
const button = document.querySelector("button");
const div = document.querySelector("div");

const setText = (text) => {
  div.textContent = text
}

const checkAuth = () => {
  return new Promise((resolve, reject) => {
    setText('Checking Auth...')
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setText('Fetching User...');
    setTimeout(() => {
      resolve({ name: "Max" });
    }, 2000);
  });
};

button.addEventListener("click", () => {
  checkAuth()
     .then(
        isAuth => {
          if (isAuth) {
            return fetchUser()
          }
        }
      )
      .then(
        user => {
          setText(user.name)
        }
      )
});

///////////
const button = document.querySelector("button");
const div = document.querySelector("div");

const setText = (text) => {
  div.textContent = text
}

const checkAuth = () => {
  return Rx.Observable.create(observer => {
    setText('Checking Auth...')
    setTimeout(() => {
      observer.next(true);
    }, 2000);
  })
};

const fetchUser = () => {
  return Rx.Observable.create(observer => {
    setText('Fetching User...')
    setTimeout(() => {
      observer.next({name: 'Max'});
    }, 2000);
  })
};

Rx.Observable.fromEvent(button, 'click')
  .switchMap(event => checkAuth())
  .switchMap(isAuth => {
    if (isAuth) {
      return fetchUser()
    }
  })
  .subscribe(user => {
    setText(user.name)
  })
/


const button = document.querySelector("button");
const div = document.querySelector("div");

const setText = (text) => {
  div.textContent = text
}

const checkAuth = () => {
  return new Promise((resolve, reject) => {
    setText('Checking Auth...')
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
}

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setText('Fetching User...')
    setTimeout(() => {
      resolve({ name: "Max" });
    }, 2000)
  })
}

button.addEventListener("click", async () => {
  const isAuth = await checkAuth()
  let user = null;
  if (isAuth) {
    user = await fetchUser()
  }
  setText(user.name)
});


