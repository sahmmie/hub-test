import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scaleShowVerticalLines: true,
    scales: {
      x: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false,
      // position: 'bottom',
      label: {
        fontSize: 800,
        fontColor: '#EA9C28'
      },
    }
  };
  reports = {
    chartLabels: ['16', '17', '18', '19', '20', '21', '22', '23', '24'],
    chartType: 'line',
    chartLegend: true,
    chartData: [
      { data: [50, 35, 150, 20, 20, 128, 100, 80, 20, 75], label: 'Product View', borderColor: '#2AB535', backgroundColor: 'transparent' },
      { data: [20, 65, 45, 40, 79, 100, 90, 57], label: 'Store visits', borderColor: '#CB1BBD', backgroundColor: 'transparent' },
    ]
  };
  messages = [
    {
      name: 'Saint Morris',
      product: '2019 New Design light Sneakers Mesh Latest Men Sport Shoes',
      image: '../../../assets/images/store-profile.png'
    },
    {
      name: 'Apostle Ben',
      product: 'Fashion Women PU Leather Messenger Handbag Shoulder B… C',
      image: '../../../assets/images/store-profile.png'
    },
    {
      name: 'Eugene Investor',
      product: 'new ladies mini bucket bag female shoulder slung Bad',
      image: '../../../assets/images/store-profile.png'
    },
    {
      name: 'Obaia Gang',
      product: 'Samsung Galaxy Note 10+ Plus 5G (512GB/12GB, Tel) - Aura …',
      image: '../../../assets/images/store-profile.png'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
