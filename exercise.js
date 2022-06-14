
function getCustomer(id, callback) {
  setTimeout(() => {
    callback({ 
      id: 1, 
      name: 'Hamed Sahebi', 
      isGold: true, 
      email: 'email' 
    });
  }, 4000);  
}

function getTopMovies(callback) {
  setTimeout(() => {
    callback(['movie1', 'movie2']);
  }, 4000);
}

function sendEmail(email, movies, callback) {
  setTimeout(() => {
    callback();
  }, 4000);
}



function getCustomerbyPromise(id){

  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000); 

  });
}

function getTopMoviesbyPromise(){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);

  });
}

function sendEmailbyPromise(email,movies){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve();
    }, 4000);
  });

}


getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
});


getCustomerbyPromise(1)
.then(customer => {
  console.log('Customer: ',customer)
  if (customer.isGold){
    getTopMoviesbyPromise()
    .then(movies => {
      console.log('Top movies: ',movies);
      sendEmailbyPromise(customer.email, movies)
      .then(()=> console.log("Email sent..."))
    })
  }
})


async function sendEmail(){
  const customer = await getCustomerbyPromise(1);
  if(customer.isGold){
    const movies = await getTopMoviesbyPromise();
    await sendEmailbyPromise(customer.email, movies)
  }
}
sendEmail();

