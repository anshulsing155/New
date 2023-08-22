<script>
	import Content from '../../components/Content.svelte';
    export let data;
    let newData = JSON.parse(data.adminData);
</script>

<svelte:head>
  <title>Salvia-kit Dashboard v10 with Svelte-kit</title>
</svelte:head>
<Content title="Taxes" data={newData}/>
