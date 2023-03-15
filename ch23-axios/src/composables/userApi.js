import { ref, isRef, unref, watchEffect, watch } from "vue";
import axios from "axios";

async function getSingleUserData(url, uid) {
  //console.log('running', unref(url)+ unref(uid))
  const userData = ref(null);
  const error = ref(null);

    try {
      const res = await axios(unref(url) + unref(uid));
      console.log(res);
      if(res.status === 200) 
      return userData.value = res.data.data.first_name;
    } catch (err) { 
      return error.value = err.message;
    }  
}

export { getSingleUserData };
