<script>
    import { browser } from "$app/environment";
    
    export let progress = 0;
    import "../../app.css";
   
	

    
   
    
    
    function undo_operation() {
        
        if(browser){
            history.back();
        }
        
    }
    

</script>

<section class=" m-auto mx-14 my-5 flex font-semibold text-xl text-green-700">
    <div class=" flex-1">RINN.in</div>
    <div class="hidden sm:hidden lg:block flex-2">
        Need help? Call +(91) 1234565678
    </div>
</section>
<div class="container m-auto">
    <button
        class=" p-2"
        on:click={undo_operation}
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
        </svg>
    </button>
</div>
<section>
    <div class="progress-bar">
        <div class="progress" style="width: {progress}%" />
    </div>
    <div>
        <img
            class="relative rounded-full m-auto h-[77px] w-[77px] -top-12 sm:-top-13 lg:-top-14"
            src="/img/progressImg.jpg"
            alt=""
        />
    </div>
</section>

<style>
    .progress-bar {
        width: 80%;
        height: 4px;
        background-color: rgb(232, 234, 230);
        border-radius: 4px;
        overflow: hidden;
        margin: 1% auto;
    }

    .progress {
        height: 100%;
        background-color: #017a4e;
        transition: width 0.3s ease-in-out;
    }
    button:hover {
        background: gainsboro;
        border-radius: 4px;
       
    }
    
</style>
