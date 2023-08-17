<script>
	import Content from '../../components/Content.svelte';
    import { onMount } from "svelte";
    import "../../app.css";
    import { json } from '@sveltejs/kit';
    export let data;
    let newData = JSON.parse(data.adminData);
    // console.log(newData);
    // let getData = JSON.parse(data);
    //     for (let key in data) {
    //     if (data.hasOwnProperty(key)) {
    //         value = data[key];
    //         console.log(key, value);
    //     }
    // }

    // Object.entries(data.newData).map((entry) => {
    //     let key = entry[0];
    //     let value = entry[1];
    //     console.log(key, value);
    // const keyValueArray = [];

    // for (const key in data.newData) {
    //     if (data.hasOwnProperty(key)) {
    //         keyValueArray.push({ key: key, value: data.newData[key] });
    //     }
    // }
  //   const parsedObject = JSON.parse(data.newData);
  // console.log(parsedObject.home);
//     let arrayData = [];
//    data.newData.forEach(element => {
//     arrayData.push(element);
//     console.log(element);
//    });
   
</script>

<svelte:head>
  <title>Salvia-kit Dashboard v10 with Svelte-kit</title>
</svelte:head>
<Content title="Taxes" data={newData}/>
