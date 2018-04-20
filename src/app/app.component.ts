import { Component } from '@angular/core';

export interface Element {
  position: number;
  title: string;
  icon: string;
  discription: string;
  unnsei: string;
  unnsei1: string;
  unnsei2: string;
  unnsei3: string;
  unnsei4: string;
}

const ELEMENT_DATA: Element[] = [
  {
    'position': 1,
    'title': 'フェオ',
    'icon': 'V',
    'discription': '家畜、財産、英語のfee',
    'unnsei': '何らかの報酬を得る。物事が複利的に発展していく。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 2,
    'title': 'ウル',
    'icon': 'U',
    'discription': '野生の牛（オウルコス）',
    'unnsei': '猪突猛進。勇猛果敢。一途。野生のパワー。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 3,
    'title': 'ソーン',
    'icon': 'SS',
    'discription': '巨人、トゲ、助言',
    'unnsei': '慎重さを要する。計画的な足止め。危険回避。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 4,
    'title': 'アンスール',
    'icon': 'A',
    'discription': '口、オーディーン神、英語のanswer',
    'unnsei': '言葉のコミュニケーション。メール。情報。専門知識。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 5,
    'title': 'ラド',
    'icon': 'R',
    'discription': '車輪、旅',
    'unnsei': '移動、変化。転職。遠方からの情報。車、バイク。運送業。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 6,
    'title': 'ケン',
    'icon': 'KK',
    'discription': 'たいまつの火',
    'unnsei': '知恵。ひらめき。やる気。情熱。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 7,
    'title': 'ギューフ',
    'icon': 'JJ',
    'discription': 'ギフト、愛情、才能',
    'unnsei': 'やさしさ。恋愛。人類愛。人を助ける事。プレゼント。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 8,
    'title': 'ウィン',
    'icon': 'Q',
    'discription': '喜び、満足',
    'unnsei': 'うれしい結果。十分良くやっている。自画自賛。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 9,
    'title': 'ハガル',
    'icon': 'HH',
    'discription': '雹（ひょう）',
    'unnsei': '不可避の変化。予想外のトラブル。破壊を伴う変革。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 10,
    'title': 'ニイド',
    'icon': 'N',
    'discription': 'need、欠乏、忍耐',
    'unnsei': '身動きとれない。しがらみ。タロットの吊られた男。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 11,
    'title': 'イス',
    'icon': 'II',
    'discription': '氷、英語のIce',
    'unnsei': '停滞。安定。冬眠。計画の凍結。冷えた関係。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 12,
    'title': 'ヤラ',
    'icon': 'J',
    'discription': '一年、収穫',
    'unnsei': '収穫までのプロセス。日々の努力が大事。季節の巡り。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 13,
    'title': 'ユル',
    'icon': 'E',
    'discription': 'イチイの木、死と再生、弓',
    'unnsei': '180度の方向転換。根本的な変化。くされ縁を絶つ。脱皮。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 14,
    'title': 'ペオース',
    'icon': 'P',
    'discription': 'ダイスカップ、ギャンブル、神の手',
    'unnsei': '天に委ねる。思わぬ展開。意外な事実が発覚。パルプンテ。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 15,
    'title': 'エオロー',
    'icon': 'X',
    'discription': '友情、保護',
    'unnsei': '頼もしい仲間。横の人間関係。霊的に守られている。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 16,
    'title': 'シゲル',
    'icon': 'Z',
    'discription': '太陽、勝利',
    'unnsei': '自信満々。威風堂々。まぶしすぎる人。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 17,
    'title': 'ティール',
    'icon': 'T',
    'discription': 'ティール神（マルス）、父性',
    'unnsei': '男性性。向上心。精神力。戦略をもって前進する。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 18,
    'title': 'ペオーク',
    'icon': 'B',
    'discription': 'カバの木、母性、成長',
    'unnsei': '成長を見守る。母親的な役割。おせっかい。世話焼き。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 19,
    'title': 'エオー',
    'icon': 'EE',
    'discription': '馬、変化',
    'unnsei': '変化。自由独立。散歩、ドライブ。職人気質。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 20,
    'title': 'マン',
    'icon': 'M',
    'discription': '人間',
    'unnsei': '人間関係。相互扶助。人のふり見てわがふり直す。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 21,
    'title': 'ラーグ',
    'icon': 'L',
    'discription': '水、女性性',
    'unnsei': 'ロマンス。感性。霊感。意志薄弱。幻想。流れに乗る。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 22,
    'title': 'イング',
    'icon': 'MM',
    'discription': '豊穣、イング神、フレイ神',
    'unnsei': '満足のいく成果。ゴールに到達。一段落。完了。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 23,
    'title': 'オセル',
    'icon': 'O',
    'discription': '故郷',
    'unnsei': '家族のしがらみ。歴史、伝統、文化。不動産。遺産。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 24,
    'title': 'ダエグ',
    'icon': 'D',
    'discription': '一日、太陽の運行',
    'unnsei': '重要なルーチンワーク。一歩一歩。日常茶飯事。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  },
  {
    'position': 25,
    'title': 'ブランク',
    'icon': '',
    'discription': '宿命',
    'unnsei': '今が運命の分岐点。他のルーンを強調。物事は白紙である。',
    'unnsei1': '一言',
    'unnsei2': '恋愛',
    'unnsei3': '健康',
    'unnsei4': '金運'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  result: Element;
  isShow: boolean = false;
  displayedColumns: string[] = ['position', 'title', 'icon', 'discription', 'unnsei'];
  dataSource: Element[] = ELEMENT_DATA;
  isLoding: boolean;

  onClick(): void {
    this.isShow = false;
     this.isLoding = true;
    let rand: number = Math.floor(Math.random() * this.dataSource.length);
    this.result = this.dataSource[rand];
    setTimeout(() => {
      this.isShow = true;
       this.isLoding = false;
    }, 1000);
  }
}
