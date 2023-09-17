<script>

    let val_1 =100000;
    // let obj1 = new Intl.NumberFormat('en-US');  
    // let output1 = obj1.format(val_1);  
    
    function myfun_emi_val_1(){
        if(val_1<100000){
            val_1=100000;
        }else if(val_1>1000000000){
            val_1=1000000000;
        }
    }
    let val_max_1 = 1000000000;
    let val_2 = 1;
    function myfun_emi_val_2(){
        if(val_2<1){
            val_2=1;
        }else if(val_2>30){
            val_2=30;
        }
    }

    let val_max_2 = 30;
    let val_3 = 3;
    function myfun_emi_val_3(){
        if(val_3<0.5){
            val_3=0.5;
        }else if(val_3>15){
            val_3=15;

        }
    }
    let val_max_3 = 15;
    // calculation
    let rate;
    let time;
    let nt;
    let emi_cal;
    let div_cal;
    let total_amount;
    let int_rate;
    $: {
        if(val_1>99999 && val_3>0.01){
            rate=val_3/1200;
            time=12*val_2;
            nt=(1+rate)**time;
            div_cal=nt/(nt-1);
            emi_cal=(val_1*rate*div_cal).toFixed(2);
            if(emi_cal<1 || !(isFinite(emi_cal))){
                emi_cal=0.00;
            }
            total_amount=(emi_cal*(12*val_2)).toFixed(2);
            if(total_amount<1 || isNaN(total_amount)){
                total_amount=0.00;
            }
            int_rate=(total_amount-val_1).toFixed(2);
            if(int_rate<1 || isNaN(int_rate)){
                int_rate=0.00;
            }
        }else{
            emi_cal=0.00;
            int_rate=0.00;
            total_amount=0.00;
            
        }
         
         

         
    };
  

 
let b_close;
let p_month;
let inter_val_2;
let int_val;
$:{ 
    int_val=val_1;   
    inter_val_2=int_val*rate;
    p_month=emi_cal-(val_1*rate);
    b_close =val_1-(emi_cal-(val_1*rate));
    
};
var arr_val;
$: arr_val=[
        {
            'tenur': 1,
            'opening_balance':val_1,
            'emi_month': emi_cal,
            'interest_month': (val_1*rate).toFixed(2),
            'principal_month':(emi_cal-(val_1*rate)).toFixed(2),
            'close_bal':(val_1-(emi_cal-(val_1*rate))).toFixed(2),
        }
        
        
       
        
    ];        




 /// test
 

 $: {
    for(let i=0; i< val_2 ; i++)
        {   
            if(i==0) {
                for (let j=2; j<13;j++){
                    let dict={};
                    int_val=b_close;
                    inter_val_2=int_val*rate;
                    p_month=emi_cal-inter_val_2;
                    if(j==12 && val_2==1){
                        b_close=0.00;
                    }else{
                        b_close=int_val-p_month;
                    }
                    
                    
                    dict['tenur']=j
                    dict['opening_balance']=int_val.toFixed(2)
                    dict['emi_month']= emi_cal
                    dict['interest_month']=inter_val_2.toFixed(2)
                    dict['principal_month']=p_month.toFixed(2)
                    dict['close_bal']=b_close.toFixed(2)
                    arr_val.push(dict)
                }            
            } else {
                for (let j=2+((12*i)-(i/i)); j<13 +(12*i);j++){
                    let dict={};
                    int_val=b_close;
                    inter_val_2=int_val*rate;
                    p_month=emi_cal-inter_val_2;
                    if(j==(13+(12*i)-1) && (i==val_2-1)){
                        b_close=0.00;
                    }else{
                        b_close=int_val-p_month;
                    }
                    
                    
                    dict['tenur']=j
                    dict['opening_balance']=int_val.toFixed(2)
                    dict['emi_month']= emi_cal
                    dict['interest_month']=inter_val_2.toFixed(2)
                    dict['principal_month']=p_month.toFixed(2)
                    dict['close_bal']=b_close.toFixed(2)
                    arr_val.push(dict)
                }
            }    
        }
   };



    

    
    

    
   
</script>

<section class=" bg-green-50">
    <div class="container m-auto py-10">
        <div class=" text-center py-10 px-10">
            <p class=" text-5xl font-bold">Home Loan EMI Calculator</p>
        </div>
        <!--grid for two cols-->
        <div class="grid lg:grid-cols-2 px-16">
            <div>
                <div class="flex justify-between">
                    <h4>Loan Amount</h4>
                    <label for="rupee">₹:
                    <input
                        class="w-15 border-2"
                        type="text"
                        id="rupee"
                        on:change={myfun_emi_val_1}
                        min="10000"
                        
                        bind:value={val_1}
                    
                    
                    /></label>
                </div>
                
                <input
                    type="range"
                    bind:value={val_1}
                    min="10000"
                    max={val_max_1}
                    step="1"
                    class="w-full"
                />
                <div class=" flex justify-between bg-slate-50">
                    <div class=" m-2">₹ 1 lac</div>
                    <div class="m-2">₹100cr</div>
                </div>
                <!---######2 progress bar-->
                <div class="flex justify-between mt-4">
                    <h4>Tenure (Years)</h4>

                    <input class=" border-2 w-10" on:change={myfun_emi_val_2} type=" number" bind:value={val_2} />
                </div>

                <input
                    type="range"
                    
                    bind:value={val_2}
                    min="1"
                    max={val_max_2}
                    step="1"
                    class="w-full"
                />
                <div class=" flex justify-between bg-slate-50">
                    <div class=" m-2">1 yr.</div>
                    <div class="m-2">30 yr.</div>
                </div>
                <!---progress bar3-->
                <div class="flex justify-between mt-4">
                    <h4>Interest Rate (% P.A.)</h4>

                    <input class=" border-2 w-12" on:change={myfun_emi_val_3} type="" bind:value={val_3} />
                </div>

                <input
                    type="range"
                    id="price"
                    bind:value={val_3}
                    min="0.01"
                    max={val_max_3}
                    step=".01"
                    class="w-full"
                />
                <div class=" flex justify-between bg-slate-50">
                    <div class=" m-2">0.01</div>
                    <div class="m-2">15</div>
                </div>
            </div>
            <div class="ml-8 mt-4 bg-fixed">
                <p class="lg:px-28">Monthly Home Loan EMI</p>
                <p class="lg:px-28 text-4xl text-blue-800 font-semibold">
                    <sup>₹</sup>{emi_cal}
                </p>
                <p class="lg:px-28 font-semibold mt-2">Principal Amount</p>
                <p class="lg:px-28 font-semibold text-xl">
                    <sup>₹</sup>{#if (val_1==null || val_1<100000)}
                                    0.00
                                {:else}
                                    {val_1}    
                                {/if}
                                
                </p>
                <p class="lg:px-28 font-semibold mt-2">Interest Amount</p>
                <p class="lg:px-28 font-semibold text-xl">
                    <sup>₹</sup>{int_rate}
                </p>
                <p class="lg:px-28 font-semibold mt-2">Total Amount Payable</p>
                <p class="lg:px-28 font-semibold text-xl">
                    <sup>₹</sup>{total_amount}
                </p>
                <p class="lg:px-28 font-semibold">Need more information?</p>
                <button
                    class=" hover:bg-blue-800 lg:ml-24 mt-4 bg-blue-600 rounded-xl px-14 py-4 text-white"
                    >Talk to our Loan Export</button
                >
            </div>
        </div>
        <!--@@@@@@@@@@@@@@######################-->
        <p class="mt-8 py-3 px-8">These calculators are provided only as general self-help Planning Tools. Results depend on many factors, including the assumptions you provide. We do not guarantee their <br> accuracy, or applicability to your circumstances.</p>
        <p class=" font-bold px-8 italic">NRIs should input net income.</p>
        <h2 class=" font-bold text-2xl mt-6 px-8">Home Loan EMI Calculator</h2>
        <p class="mt-4 px-8  font-normal"> Home loan calculator helps you calculate your Home Loan Emi with ease.EMI calculator for a home loan can help you make an informed decision about<br>
             buying a new house. The EMI calculator is useful in planning your cashflows for servicing your home loan. home loans with EMIs starting from ₹769 per lac <br>
              and interest rates starting from 8.50%* p.a. with additional features such as flexible repayment options and top-up loan. With a low-interest rate and long repayment tenure,<br>
               we ensure a comfortable home loan EMI for you. With our reasonable EMIs, Home loan is lighter on your pocket. Calculate the EMI that you will be required to<br>
                pay for your home loan with our easy to understand home loan EMI calculator.</p>

        <p class="mt-6 px-8 text-2xl font-bold">What is Home Loan EMI Calculator?</p>
        <p class="mt-4 px-8">Home Loan EMI Calculator assists in calculation of the loan installment i.e. EMI towards your home loan. It an easy to use calculator and acts as  a financial planning tool <br> for a home buyer.</p>  
        <p class="mt-6 px-8 font-bold text-2xl">What is Home Loan EMI?</p> 
        <p class="mt-4 px-8 ">EMI stands for Equated Monthly Installment. It includes repayment of the principal amount and payment of the interest on the outstanding amount of your home loan.<br> A longer loan tenure (for a maximum period of 30 years) helps in reducing the EMI.</p>     
        <p class="mt-6 px-8 font-bold text-2xl">Illustration: How is EMI on Loan Calculated?</p>
        <p class="mt-4 px-8 font-bold text-base">Formula for EMI Calculation is -</p>
        <p class="mt-4 px-8 font-bold text-base">P x R x (1+R)^N / [(1+R)^N-1] where-</p>
        <p class="mt-2 px-8 font-semibold ">P = Principal loan amount <br>

            N = Loan tenure in months<br>
            
            R = Monthly interest rate<br>
            
            The rate of interest (R) on your loan is calculated per month.<br>
            
            R = Annual Rate of interest/12/100 <br>
            
            If rate of interest is 7.2% p.a. then r = 7.2/12/100 = 0.006</p>
        <p class="mt-3 px-8">For example, If a person avails a loan of ₹10,00,000 at an annual interest rate of 7.2% for a tenure of 120 months (10 years), then his EMI will be calculated as under:
        </p> 
        <p class="mt-4 px-8 font-bold text-xl">EMI= ₹10,00,000 * 0.006 * (1 + 0.006)120 / ((1 + 0.006)120 - 1) = ₹11,714.</p>   
        <p class=" mt-2 px-8 gap-2">The total amount payable will be ₹11,714 * 120 = ₹14,05,703. Principal loan amount is ₹10,00,000 and the Interest amount will be ₹4,05,703 <br>
            Calculating the EMI manually using the formula can be tedious. <br>
            EMI Calculator can help you calculate your loan EMI with ease.</p>
        <p class="mt-6 px-8 font-bold text-2xl">How does EMI calculation help in planning the home purchase?</p>    
        <p class="mt-3 px-8">Home Loan EMI calculator gives a clear understanding of the amount that needs to be paid towards the EMIs and helps make an informed decision about the outflow  <br> towards  the housing loan every month. This helps estimate the loan amount that can be availed and helps in assessing the own contribution requirements and cost of<br> the property. Therefore knowing the EMI is crucial for calculation of home loan eligibility and planning your home buying journey better.</p>
        <p class="mt-8 px-8 font-bold text-2xl">What are  Home Loans Key Features and Benefits?</p>
        <div class=" mt-6 px-16">
            <ul class="list-disc">
                <li>Home Loans for purchase of a flat, row house, bungalow from private developers in approved projects</li>
                <li>Home Loans for purchase of properties from Development Authorities such as DDA, MHADA etc</li>
                <li>Loans for purchase of properties in an existing Co-operative Housing Society or Apartment Owners' Association or Development Authorities settlements or privately built up homes</li>
                <li>Loans for construction on a freehold / lease hold plot or on a plot allotted by a Development Authority</li>
                <li>Expert legal and technical counselling to help you make the right home buying decision</li>
                <li>Integrated branch network for availing and servicing the Home Loans anywhere in India</li>
                <li>Special arrangement with AGIF for Home Loans for those employed in the Indian Army.</li>
                

            </ul>
        </div>
        <p class=" mt-10 px-8">Our tailor made home loans caters to customers of all age groups and employment category. We provide longer tenure loans of  up to 30 years, telescopic repayment option, under adjustable rate option that specifically caters to younger customers to become home owners at an early stage of their life.</p>
        <p class="mt-8 px-8 ">With our experience of providing home finance for over 4 decades, we are able to understand the diverse needs of our customers and fulfill their dream of owning a home .</p>
        <p class="mt-8 px-8  font-bold text-2xl">How to use Home Loan EMI Calculator?</p>
        <p class="mt-2 px-8">All you need to do is input the following to arrive at your EMI:</p>
        <div class="mt-4  px-16">
            <ul class=" list-disc">
                <li>Loan Amount: Input the desired loan amount that you wish to avail</li>
                <li>Loan Tenure (In Years): Input the desired loan term for which you wish to avail the housing loan. A longer tenure helps in enhancing the eligibility</li>
                <li>Interest Rate (% P.A.): Input interest rate.</li>

            </ul>
        </div>
        <p class="font-bold text-2xl mt-10 px-8"><a href="#" class=" hover:text-green-800 text-blue-800">Click here</a> to Know the Prevailing Home Loan Interest Rates</p>
        <p class="mt-4 px-8 font-bold text-2xl">What is Home Loan Amortization Schedule?</p>
        <p class="mt-4 px-8">Loan amortization is the process of reducing the debt with regular payments over the loan period. A home loan amortization<br> 
            schedule is a table giving the details of the repayment amount, principal and interest component.</p>
        <p class=" px-8 mt-8">EMI calculators give a fair understanding about the ratio of the principal amount to the interest due, based on the loan tenure and interest rates. EMI calculator <br> also provides an  amortization table elucidating the repayment schedule.
             home loan calculator provides a complete break-up of the interest and principal amount.</p> 
        <p class=" mt-4 px-8 font-bold text-2xl">Various Repayment Plans enhancing Home Loan Eligibility:</p> 
        <div class="mt-8 px-10">
            
            <li class="px-4">Step Up Repayment Facility (SURF)</li>
            <p class="mt-2">SURF offers an option where the repayment schedule is linked to the expected growth in your income. You can avail a higher amount of loan and pay lower EMIs in<br> the initial years.
                 Subsequently, the repayment is accelerated proportionately with the assumed increase in your income.</p>
            <li class="px-4 mt-4">Flexible Loan Installments Plan (FLIP)</li>
            <p class="mt-2">FLIP offers a customized solution to suit your repayment capacity which is likely to alter during the term of the loan. The loan is structured in such a way that <br>the EMI is higher during the initial years and subsequently decreases in proportion to the income.</p>
            <li class="px-4 mt-4">Tranche Based EMI</li>
            <p class="mt-2">If you purchase an under construction property you are generally required to service only the interest on the loan amount drawn till the final disbursement of the loan and pay<br> EMIs thereafter. In case you wish to start principal repayment immediately you may opt to tranche the loan and start paying EMIs on the cumulative amounts disbursed.</p>
            <li class="px-4 mt-4">Accelerated Repayment Scheme</li>
            <p class="mt-2">This option provides you the flexibility to increase the EMIs every year in proportion to the increase in your income which will result in you repaying the loan much faster</p>
            <li class="px-4 mt-4">Telescopic Repayment Option</li>
            <p class="mt-2">With this option you get a longer repayment tenure of up to 30 years. This means an enhanced loan amount eligibility and smaller EMIs.</p>
            <p class="mt-3">Estimate EMIs of your housing loan by using our feature rich EMI calculator, now!</p>
            <p class="mt-3">After getting an estimate of EMI using the calculator, you can apply for a home loan online from the comfort of your living room easily with Online Home Loans.</p>
           
        

        </div>       
    
        <p class=" font-bold text-3xl mt-8 px-8">What is a Pre-Approved Home Loan?</p>
        <p class=" mt-3 px-8">A facility of a pre-approved home loan even before you have identified your dream home. A <a href="#" class=" font-bold text-blue-800 hover:text-green-900 underline"> pre-approved home loan </a> is an in-principal approval for a loan given on the basis of your income, creditworthiness and financial position.</p>
        <p class="px-8 mt-4">Apply for a home loan online with HDFC Bank, click <a href="#" class=" font-bold text-blue-800 underline  hover:text-green-900"> Apply Online</a></p>
        <p class="px-8 mt-4">In case you would like us to get in touch with you, kindly leave your details with us.</p>
        <p class="px-8 mt-4"><a href="#" class=" underline font-bold text-blue-800 hover:text-green-900">Click here </a> to know more about home loans.</p>
        <p class=" text-center font-bold text-5xl py-24">Home Loan Amortization Schedule</p>
        <!--table-->
        <div class=" px-8 overflow-x-auto">
            <table>
                <thead class=" bg-blue-950 text-white">
                    <tr>
                        <th>month</th>
                        <th>Opening Balance</th>
                        <th>EMI</th>
                        <th>Interest paid Monthly</th>
                        <th>Principal paid Monthly</th>
                        <th>Closing Balance</th>
                    </tr>    
                </thead>

                <tbody class=" bg-slate-300">
                    
                    {#each arr_val as bt }
                        <tr>
                            
                                <td>{bt.tenur}</td>
                                <td>{bt.opening_balance}</td>
                                <td>{bt.emi_month}</td>
                                <td>{bt.interest_month}</td>
                                <td>{bt.principal_month}</td>
                                <td>{bt.close_bal}</td>
                        
                                
                        </tr>
                    {/each}   
                        
                     
                </tbody>
            </table>
        </div>
        
    
    </div>

</section>

<!---css for table-->
<style>
    table, td, th {
      border: 1px solid;
      text-align: center;
      width: 76em;
      height: 50px;
      
    }
    
    table {
      
      border-collapse: collapse;
      margin-top: 5px;
      
    }
</style>
