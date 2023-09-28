<script>
 export let data;
    
console.log("hrere" +data.file);
</script>
<!-- <iframe style="background: #F1F5F4;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);width: 100%;height: 70vh;"  src="https://charts.mongodb.com/charts-project-0-gvcjt/embed/dashboards?id=65114b2e-0c8b-4a2c-8900-49e31083983c&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe> -->
<div class="text-xl text-center font-medium m-8">
    <h1>Download All User Data From Database in Excel</h1>
</div>
<div class="flex justify-center items-center">
    <div class="flex justify-center">
        <button
            class="download-button transform active:scale-95 bg-green-700 hover:bg-green-650 text-white px-16 py-6 rounded-lg font-bold tracking-widest w-full"
        >
            <div class="flex justify-center items-center relative">
                <div class="svg-container">
                    <svg
                        class="download-icon"
                        width="18"
                        height="22"
                        viewBox="0 0 18 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            class="download-arrow"
                            d="M13 9L9 13M9 13L5 9M9 13V1"
                            stroke="#F2F2F2"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                            stroke="#F2F2F2"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <div class="download-loader text-white hidden" />
                    <svg
                        class="check-svg hidden"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z"
                            fill="white"
                        />
                    </svg>
                </div>
                
                    <form method="post">
                        <div class="button-copy pl-2 leading-none uppercase">
                        <input type="submit" value="Generate file" >
                    </div>
                    </form>
                
            </div>
        </button>
    </div>
</div>

<style>
    button:hover {
        transform: scale(1.01);
    }

    button:focus {
        outline: none !important;
    }

    button:active {
        transform: scale(0.99);
    }

    .check-svg {
        animation: svgScale 0.5s ease-in-out;
    }
    .download-arrow {
        transition: transform 0.2s linear;
    }
    button:hover .download-arrow {
        transform: translate(0, 3px);
    }

    @keyframes svgScale {
        0% {
            transform: scale(0);
        }

        50% {
            transform: scale(1.2);
        }
    }

    button.download-button {
        min-width: 340px;
        min-height: 68px;
    }
    .download-loader {
        width: 16px;
        height: 16px;
        border: 2px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        opacity: 0;
        animation: button-loading-spinner 1s ease 3;
    }
    @keyframes button-loading-spinner {
        from {
            transform: rotate(0turn);
            opacity: 1;
        }

        to {
            transform: rotate(1turn);
            opacity: 0;
        }
    }
    .button-copy {
        padding-top: 2px;
    }
</style>
