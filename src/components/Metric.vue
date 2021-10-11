<script>
// CommitChart.js
import { Bar } from 'vue-chartjs'

// {"DAY":"2021-10-10T00:00:00Z","SUM(RUNE_AMOUNT_USD)":1906175.5315498754}

export default {
  extends: Bar,
  props: ['title', 'chartdata', 'options'],
  mounted () {
    // console.log(JSON.stringify(this['chartdata'][0]))
    // get the first key that's not "DAY" - assuming that there are only 2
    const label = Object.keys(this['chartdata'][0]).find(key => key != "DAY");
    const data = this['chartdata'].map(obj => obj[label])
    const labels = this['chartdata'].map(obj => {
        const date = new Date(obj.DAY);
        return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    })
    // console.log(data)
    // console.log(data[0])
    // console.log(labels)
    // console.log(labels[0])
    // this.renderChart(this.chartdata, this.options)
    this.renderChart({
      labels: labels,
      datasets: [
        {
          label: label,
          backgroundColor: '#f87979',
          data: data,
        }
      ]
    })
  }
}
</script>
