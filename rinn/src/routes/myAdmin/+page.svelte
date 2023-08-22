<script>
	import Content from '../../components/Content.svelte';
    import "../../app.css";
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
  <title>Admin Dashboard | Rinn.in</title>
</svelte:head>
<Content title="Taxes" data={newData}/>
