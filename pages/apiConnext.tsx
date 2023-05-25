

import axios from 'axios';

export async function getStaticProps() {
  const res= await fetch("https://api.postman.com/collections/10857893-7790ba35-ab74-44b9-af92-9e5d6bb3dfa5?access_key=PMAT-01GZ71WRC6D4EE6X246J8308BT");
  
 
  const data = await res.json();

  const res2 = await fetch("https://api.postman.com/collections/10857893-7790ba35-ab74-44b9-af92-9e5d6bb3dfa5?access_key=PMAT-01GZ71WRC6D4EE6X246J8308BT");
  const data2 = await res2.json();


  return {
    props: {allData:data}, 
  }
}


const url = 'https://gw-bf.betflik256plus.online/api/v3/user/profile'
axios.get(url).then((response) => {
  console.log('success')
  console.log(response);
})
.catch((error) => {
  console.log("Error")
});




function Test({Alldata}) {

  return (
    <>
      
    </>
  );
}
export default Test;