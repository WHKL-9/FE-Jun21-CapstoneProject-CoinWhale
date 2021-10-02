const Tweets = async () => {
    try {
        const response = await fetch("http://localhost:5000/tweets?q=twitterDev&count=10");

        if (response.ok) {
          const data = await response.json();
          console.log(data);
        }
    } catch (error) {
        console.log(error)
    }
 
};

export default Tweets;
