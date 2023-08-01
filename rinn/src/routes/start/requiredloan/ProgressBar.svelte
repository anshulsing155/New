<!-- ProgressBar.svelte -->
<script>
    let price = 0;
    const maxPrice = 1000;
  
    function updateProgressBar() {
      const percentage = (price / maxPrice) * 100;
      return percentage.toFixed(2) + '%';
    }
  </script>
  
  <style>
    .progress-bar {
      width: 100%;
      height: 30px;
      background-color: #f0f0f0;
      border-radius: 5px;
      overflow: hidden;
    }
  
    .progress {
      height: 100%;
      background-color: #4CAF50;
      color: white;
      text-align: center;
      line-height: 30px;
      transition: width 0.3s ease;
    }
  
    .input-container {
      margin-top: 10px;
    }
  
    input[type="number"] {
      width: 100px;
      font-size: 16px;
      padding: 5px;
    }
  </style>
  
  <div class="progress-bar">
    <div class="progress" style="width: {updateProgressBar()}">{updateProgressBar()}</div>
  </div>
  
  <div class="input-container">
    <label for="price">Enter Price:</label>
    <input type="number" id="price" bind:value={price} min="0" max={maxPrice} step="1">
  </div>
  