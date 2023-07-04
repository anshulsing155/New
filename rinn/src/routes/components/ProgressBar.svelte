<script>
    export let progress = 0;
    import '../../app.css';
    import img from '$lib/img/progressImg.jpg';
</script>
<section class=" m-auto mx-14 my-5 flex font-semibold text-xl text-green-700">
    <div class=" flex-1"> RINN.in</div>
    <div class="hidden sm:hidden lg:block  p-2 m-2 flex-2">Need help? Call +(91) 1234565678</div>
</section>
<div class="progress-bar">
    <div class="progress" style="width: {progress}%" />
</div>


    <img class="relative rounded-full m-auto  h-[77px] w-[77px] -top-14 sm:-top-16 lg:-top-20 " src={img} alt="" />
  
            

<style>
    .progress-bar {
        width: 80%;
        height: 4px;
        background-color: rgb(232, 234, 230);
        border-radius: 4px;
        overflow: hidden;
        margin: 3% auto;
    }

    .progress {
        height: 100%;
        background-color: #007bff;
        transition: width 0.3s ease-in-out;
    }
</style>
