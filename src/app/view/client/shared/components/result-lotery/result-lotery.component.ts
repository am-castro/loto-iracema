import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'card-result-lotery',
  templateUrl: './result-lotery.component.html',
  styleUrls: ['./result-lotery.component.scss']
})
export class ResultLoteryComponent implements OnInit{
  @Input() type: any;
  @Input() card: any;
  //   contestNumber: 2624,
  //   drawDateTime: "2023-08-24 23:00:00",
  //   contestPrize: 5500000,
  //   nextContestDate: "2023-08-26 23:00:00",
  //   dozens: [
  //     5,
  //     31,
  //     37,
  //     47,
  //     52,
  //     58
  //   ],
  //   awardRanges: [
  //     {
  //       range: "Sena",
  //       winners: 0,
  //       prize: 0
  //     },
  //     {
  //       range: "Quina",
  //       winners: 17,
  //       prize: 101127.88
  //     },
  //     {
  //       range: "Quadra",
  //       winners: 1392,
  //       prize: 1764.34
  //     }
  //   ]
  // };
  contestPrize: any;
  icons = {heart: faHeart, coin: faCoins};

  ngOnInit(): void {
    this.transformContestPrize();
  }
  transformContestPrize() {
    const value = this.card.contestPrize;
    if(value >= 999999) {
      this.contestPrize = `${(value/1000).toFixed(1)} mil`;
    }
    if(value >= 1000000) {
      this.contestPrize = `${(value/1000000).toFixed(1)} milhões`;
    }
  }
}
