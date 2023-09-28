<script>
    let val_1 = 10000;
    function myfun_eli_val_1(){
        if(val_1<10000){
            val_1=10000;
        }else if(val_1>10000000){
            val_1=10000000;
        }
    }
    let val_max_1= 10000000;
    let val_2=30;
    function myfun_eli_val_2(){
        if(val_2<1){
            val_2=1;
        }else if(val_2>30){
            val_2=30;
        }
    }
    let val_max_2=30;
    let val_3=8.5;
    function myfun_eli_val_3(){
        if(val_3<0.01){
            val_3=0.01;
        }else if(val_3>15){
            val_3=15;
        }

    }
    let val_max_3=15;
    let val_4=0;
    function myfun_eli_val_4(){
        if(val_4<1){
            val_4=0;
        }else if(val_4>10000000){
            val_4=10000000;
        }

    }
    let val_max_4=10000000;

    let gmi;
    let foir;
    let obli;
    let def_val=100000;
    let per_lac_emi;
    let loan_el;
    let loan_eligibility;
    let rate;
    let time;
    let nt;
    let divide_cal;
    let emi_eli;

$: {
    
    rate=val_3/1200;
    time=12*val_2;
    nt=(1+rate)**time;
    divide_cal=nt/(nt-1);
    per_lac_emi=(def_val*rate*divide_cal).toFixed(2);
}    


$: {
    if(val_3>0.01 && val_4>=0){
        gmi=val_1
        if(gmi>50000){
            foir=0.55
        }else{
            foir=0.45
        }
        obli=val_4

        loan_el=((gmi*foir)-obli)/per_lac_emi
        loan_eligibility=(loan_el*100000).toFixed(2)
        if(loan_eligibility<1 || !(isFinite(loan_eligibility))){
            loan_eligibility=0.00;
        }
        emi_eli=(loan_eligibility*rate*divide_cal).toFixed(2)
        if(emi_eli<1 || isNaN(emi_eli)){
            emi_eli=0.00;
        }
    }else {
        loan_eligibility=0.00;
        emi_eli=0.00;
    }
}   

</script>
<hr>
<section class=" bg-white">
    <div class="container m-auto py-10">
        <div class=" text-center py-10 px-10">
            <p class=" text-5xl font-bold ">Home Loan Eligibility Calculator</p>
            <p class="py-8">Home Loan Eligibility Calculator is dependent on factors such as your monthly income, current age, credit score, fixed monthly financial obligations, credit 
                <br> history, retirement age etc. Get the peace of mind by knowing all the details about your loan using  Home Loan Eligibility Calculator</p>
            <p class=" font-bold text-3xl">Calculate Home Loan Eligibility</p>
        </div>
        <!--grid for two cols-->
        <div class="grid lg:grid-cols-2 px-16">
            <div >
                <div class="flex justify-between">
                    <h4>Gross Income (Monthly)</h4>
                    <label for="rupee">₹:
                        <input class="w-15 border-2" type="number" on:change={myfun_eli_val_1} min="10000" bind:value={val_1} >
                    </label>
                    
                </div>
                
                <input type="range"  bind:value={val_1} min="0" max={val_max_1} step="1" class="w-full accent-emerald-600">
                <div class=" flex justify-between" >
                    <div class=" m-2 ">
                        ₹ 10k
                    </div>
                    <div class="m-2">
                        ₹1cr
                    </div>
                </div>
                <!---######2 progress bar-->
                <div class="flex justify-between mt-4">
                    <h4>Tenure (Years)</h4>
                    
                    <label for="year">Yr.<input class=" border-2 w-10" on:change={myfun_eli_val_2} type="number" bind:value={val_2} ></label>
                </div>
                
                <input type="range" id="price" bind:value={val_2} min="0" max={val_max_2} step="1" class="w-full accent-emerald-600">
                <div class=" flex justify-between" >
                    <div class=" m-2 ">
                        1yr.
                    </div>
                    <div class="m-2">
                        30yr.
                    </div>
                </div>
                <!---progress bar3-->
                <div class="flex justify-between mt-4">
                    <h4>Interest Rate (% P.A.)</h4>
                    <label for="rate">Rate(%)
                        <input class=" border-2 w-12" on:change={myfun_eli_val_3} type="number"  bind:value={val_3} >
                    </label>
                    
                </div>
                
                <input type="range" bind:value={val_3} min="0" max={val_max_3} step="1" class="w-full accent-emerald-600">
                <div class=" flex justify-between " >
                    <div class=" m-2 ">
                        0.01
                    </div>
                    <div class="m-2">
                        15
                    </div>
                </div>
                <!--progress bar 4-->
                <div class="flex justify-between mt-4">
                    <h4>Other EMIs (Monthly)</h4>
                    <label for="rupee">₹:
                        <input class=" border-2 w-15" on:change={myfun_eli_val_4} type="" bind:value={val_4} >
                    </label>
                    
                </div>
                
                <input type="range" bind:value={val_4} min="0" max={val_max_4} step="1" class="w-full accent-emerald-600">
                <div class=" flex justify-between " >
                    <div class=" m-2 ">
                        ₹0
                    </div>
                    <div class="m-2">
                        ₹1cr
                    </div>
                </div>
  
            

            </div>
            <div class="ml-8 mt-4">
                <p class="lg:px-32">Your Home Loan Eligibility</p>
                <p class="lg:px-32 text-4xl text-green-800 font-bold"><sup>₹</sup>{loan_eligibility}</p>
                <p class="lg:px-32 font-semibold text-sm mt-3">Your Home Loan EMI will be</p>
                <p class="lg:px-32 text-3xl text-green-800 font-semibold"> <sup>₹</sup>{emi_eli} /month</p>
                <button class=" hover:bg-green-800 lg:ml-24 mt-4 bg-green-700 rounded-xl px-14 py-4 text-white"> Apply Now</button>
            </div>


        </div>
        <p class="px-8 mt-8 ">These calculators are provided only as general self-help Planning Tools. Results depend on many factors, including the assumptions you provide. We do not guarantee their  accuracy, or applicability to your circumstances.</p>
        <p class="px-8 italic font-semibold">NRI should input net income.</p>
        <p class="mt-5 px-8 font-bold text-2xl">What is Home Loan Eligibility?</p>
        <p class="px-8 mt-4">Home loan eligibility is defined as a set of criteria basis which a financial institution assesses the creditworthiness of a customer to avail and repay a particular loan amount. Home  loan eligibility depends on criteria such as age, financial position, credit history, credit score, other financial obligations etc.</p>
        <p class="px-8 mt-5 font-bold text-2xl">Illustration : How Much Loan Can I Avail?</p>
        <p class="px-8 mt-2">For e.g. If a person is 30 years old and has a gross monthly salary of ₹30,000, he can avail a loan of ₹20.49 lakh at an interest rate of 6.90% for a tenure of 30 years provided he has no other existing financial obligations such as a personal loan or car loan etc.</p>
        <p class="px-8 mt-4 font-bold text-2xl">How is Home Loan eligibility calculated?</p>
        <p class="px-8 mt-2"><a class="text-green-700 font-bold underline hover:text-green-900" href="#">Housing loan</a> eligibility is primarily dependent on the income and repayment capacity of the individual(s).There are other factors that determine the eligibility of home loans such as age, financial position, credit history, credit score, other financial obligations etc</p>
        <p class="px-8 mt-4 text-2xl font-bold">Home Loan Eligibility Criteria</p>
        <div class="px-8 mt-2">
            <ul class="px-8 list-disc">
                <li class=" mt-2">Present Age and Remaining Working Years: The age of the applicant plays a major role in determining home loan eligibility. The maximum loan term is generally capped at 30 years.</li>
                <li class=" mt-2">Age Limit for Salaried Individuals: 21 to 65 years .</li>
                <li class=" mt-2">Age Limit for Self-Employed Individuals: 21 to 65 years.</li>
                <li class=" mt-2">Minimum Salary: ₹10,000 p.m.</li>
                <li class=" mt-2">Minimum business income: ₹2 lac p.a.</li>
                <li class=" mt-2">Maximum Loan Term: 30 years.</li>
                <li class=" mt-2">Financial Position: The present and the future income of applicant(s) has a significant impact on determining the loan amount.</li>
                <li class=" mt-2">Past and Present Credit History and Credit Score: A clean repayment record is considered positive.</li>
                <li class=" mt-2">Other Financial Obligations: Existing liabilities such as a car loan, credit card debt, etc.</li>
            </ul>
        </div>
        <p class="px-8 mt-4 text-2xl font-bold">How to enhance Home Loan eligibility?</p>
        <p class="px-8 mt-2 ">The eligibility for <a class="text-green-700 font-bold underline hover:text-green-900" href="#">Home Loan</a>  can be enhanced by</p>
        <div class="px-8 mt-4">
            <ul class="px-8 mt-2 list-disc">
                <li class=" mt-2">Adding an earning family member as co-applicant.</li>
                <li class=" mt-2">Availing a structured repayment plan.</li>
                <li class=" mt-2">Ensuring a steady income flow, regular savings and investments.</li>
                <li class=" mt-2">Furnishing details of your regular additional income sources.</li>
                <li class=" mt-2">Keeping a record of your variable salary components.</li>
                <li class=" mt-2">Taking actions to rectify errors (if any) in your credit score.</li>
                <li class=" mt-2">Repaying ongoing loans and short terms debts</li>

            </ul>
        </div>
        <p class="px-8 mt-4 font-bold text-2xl">How to use Eligibility Calculator?</p>
        <p class="px-8 mt-2"> Eligibility Calculator facilitates checking eligibility for housing loans online.</p>
        <div class="px-8 mt-4">
            <ul class="px-8 list-disc mt-2">
                <li class=" mt-2">Gross Income (Monthly) in ₹: Input gross monthly income. NRI should input net income.</li>
                <li class=" mt-2">Loan Tenure (In Years): Input the desired loan term for which you wish to avail the loan. A longer tenure helps in enhancing the eligibility.</li>
                <li class=" mt-2">Interest Rate (% P.A.): Input prevailing housing loan interest rate. <a class="text-green-700 font-bold hover:text-900 underline" href="#">Click here</a> to know the prevailing interest rates</li>
                <li class=" mt-2">Other EMIs (Monthly): Input the EMIs of the other loans you may have</li>
            </ul>

        </div>
        <p class="px-8 mt-4 font-bold text-2xl">Apply for a Home Loan and Calculate Your Home Loan Eligibility</p>
        <p class="px-8 mt-2">Once you get an indication of your eligibility and<a class="text-green-700 font-bold hover:text-green-900 underline" href="#">EMI amount by using the calculator</a> , you can apply for a home loan online from the comfort of your living room easily with Online Home Loans.</p>
        <p class="px-8 mt-3">To apply for a home loan online for <a class="text-green-700 hover:text-green-900 underline font-bold" href="#">click here</a></p>
        <p class="px-8 mt-3">In case you would like us to get in touch with you, kindly leave your details with us. A facility of a pre-approved home loan even before you have identified your dream home.</p>
        <p class="px-8 mt-3">These calculators are provided only as general self-help Planning Tools. Results depend on many factors, including the assumptions you provide. We do not guarantee their accuracy, or applicability to your circumstances.</p>
        <p class="px-8 mt text-2xl font-bold mt-4">What Factors determine your home loan eligibility?</p>
        <div class="px-8 mt-4">
            <ul class="px-8 list-disc">
                <li class="mt-2">When you apply for a home loan, your eligibility is primarily dependant on your income and repayment capacity.</li>
                <li class=" mt-2">There are also some other factors that will determine your home loan eligibility:</li>
                <li class=" mt-2">Your age, financial position, credit history, credit score, other financial liabilities etc.</li>
            </ul>

        </div>
        <p class="px-8 mt-4 font-bold text-2xl">More on How to Improve Home Loan Eligibility?</p>
        <p class="px-8 mt-2">You can enhance your eligibility for a home loan by:</p>
        <div class="px-8 mt-2">
            <ul class="px-8 list-disc">
                <li class=" mt-2">Adding an earning family member as co-applicant.</li>
                <li class=" mt-2">Availing a structured repayment plan.</li>
                <li class=" mt-2">Ensuring a steady income flow, regular savings and investments.</li>
                <li class=" mt-2">Furnishing details of your regular additional income sources.</li>
                <li class=" mt-2">Keeping a record of your variable salary components.</li>
                <li class=" mt-2">Taking actions to rectify errors (if any) in your credit score.</li>
                <li class=" mt-2">Repaying ongoing loans and short terms debts.</li>

            </ul>
        </div>
    
    
    
    
    
    
    
    
    
    
    
    </div>



</section>
