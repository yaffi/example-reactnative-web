import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Text, View } from '../components/Themed';

const hoge = [
  {
    sentence:
      "将来、起業してみたい！！！と思っている方はいらっしゃるでしょうか？",
  },
  {
    sentence: "そのときに皆さんはどのようなことをやってみようと思いますか？",
  },
  {
    sentence:
      "皆さんはエンジニアなので、なにかサービスを作ろうとなるかも知れません！",
  },
  {
    sentence:
      "最近だとZennというサービスが流行していると思いますが、あのサービスは個人開発らしいです！",
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAsVBMVEUPEhn///8AAAA+qP8IDBUABRBHSEpArf8MDxcjJCb5+fkAAARAr/8KAADX19cNBwZ1dXZra2w/q/+qqqoqKy0VFhsODhIgUXuTk5QAAAnQ0NA/QELy8vIABxESJzvj4+MRHCo2Nzm5ublCs/85m+oZO1kvfr5OTlCGhoewsLBeX2ClpaUoaZ4lYpQiWYYyh8scRWkOEx43lODCwsMWMUt8fH1kZGWbm5sRIjMZO1o4l+QgKuwqAAAEcElEQVR4nO3Ze1PiOhzGcYgFK6WAFwrVIoIoIKvrrornnPf/wk6bGwmFWf/Z0cr3M+MMDZexzyT5JWmtBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCjEslrCholo0/6776q+FoKnaZg0iwLPu0//Irix9t27vapu2kTy3pJS3ze//j1JL+Oj3Jns9hpFKtybBmxOeKfZ0Vs7TunsxHbn3Sf20Vqx/duZ6uJ83JsY2Kzwnh2JP3yKmne21pWpmKbp5tvpaJwuDUi/iFntvaT19lq4SgSIoqi/E/oAbu0nS0QSW81nS4XE9Hwfy0QYmeeOmaR1r6H5FrVg9/x9juhkc71zGYWKFHfltnLpjtwA3EyfBmPxy/DCz+4SKyXnfG4c/7wTYKLf6t68Jrs+0Qo1Bh9MDcs5i1nwltscmukU9v8UnNGtOhldn5cf4cJMh7sqgcePUSn5nZ157N69o2LzGluTWxuYup+/r36uYWxKgdHcbjvI2lTpZDqURckbl8r9NU7QX/rjRP9je2V87DyucX3qh4M9na2UIzlvZ6aezUhLB/mi8wtFeLS9DMz76n29GEr5vqk4pvb5LW9px5Yeoi+mNTCVN36m0hTofqX2nM19Nh974u+XirPZZnVuY/nQqwz/8cqytSDa1kPdhyD1BpNbyDmfaenQpBlVbxv4tET2EIEYSCG8rWcDhtX+gtpGIoT1ROTvVNCFcRPqh78kJ2teyN5d2SG6JvtHzYdab2ZrNQnVZy6+MpdhY5Q1WGd87rKq5AkkX3taCbrQTy4Pc7dPno703d3lpItHdnSuZTUxUoUSdmXNRtu0avUy5Za9OmRXOmiYOtBEVQSqpI6cweQHmC2JtbsTOUpakJw4nZLHXfxPVUp9HY2HMn28wrH1r1T9eCnHKImw2evs431iCw1lWO7kC97kfqUGpkXNraOji2pfGzxTI7Rs3+KKtD9181Q0zfvHXzsiq2Y+oPJh2ILqh5b/CiDaqt6YDK8cSppQyVRn7jbdR3bcH260RwdTGzJjakHxZU5Bnn0OptKyN8M6cl+mS/bJJG/KFavBxKbOdKVc5k5Bvlv5xAN7FlIza7b6lfyzkNxpavi6CBi00e6ph7sOAYxQ7SZ9K2wCEqtWLO5XLj1Wnorfxix6SNdNZfpY5Az7xhEL9Dq7v58UsSw0BeXq9VUrmrlJuEgYvPmsqS74xjEDEZPEZvN05J70tHV94/NzGUzb8k2cJds0du+2ILtNYjcNx1CbGYuk4/4/GWvsT+2PDf32DFTx+IfjK3Ky93uk9x+tu/1kq1dXBzfeIcf0aJepmIr6udUT3mdhX44kMfWauX1IdXfbmVZ1lKxFc++Lk1sWdG+qmRsyd1AUjklz/Litet9JuyflNm5ryHE1elb7yER9rmMemZlDiA3zwNDdVZiflZeRH/3/v6WpCvpK3Wx/QgmDMrctxtplKbuKZNZ2ZXsawcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAavofi2BTTQujig4AAAAASUVORK5CYII=",
  },
  {
    sentence: "しかし、個人開発でなにか始めようとすると１人で膨大な量のことをやらなければなりません\n(フロントエンド、バックエンド、インフラ、etc.......)",
  },
  {
    sentence: "そんなときに少しでもリソースの量の面でおすすめしたいのが、、、、、",
  },
  {
    title: "React Native for Web",
  },
  {
    sentence:
      "簡単に説明すると、一つのコードでアプリとWebサイトも作れてしまうというものになります！！！",
  },
  {
    sentence: "今みなさんに見てもらっていたスライドはすべてReact Native for Webで書かれていたものを見てもらっていました！",
  },
  {
    sentence: "なので、アプリ側でも同じような画面を見ることができます",
  },
  {
    sentence: "これだけじゃ、ただテキストを表示しているだけに過ぎないので、今回はメッセージアプリ的なものをSocket.ioを使用して実装してみました！",
  },
  {
    sentence: "皆さんはなぜプログラミングを学び始めましたか？",
    img: "https://www.illust-box.jp/db_img/sozai/00014/141740/watermark.jpg",
  },
];

export default function DocumentScreen() {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count - 1)}
      >
        <Text>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.sentenceContainer}>
        {hoge[count].title && (
          <Text style={styles.title}>{hoge[count].title}</Text>
        )}
        <Text style={styles.sentence}>{hoge[count].sentence}</Text>
        {hoge[count].img && (
          <Image
            style={ styles.image }
            source={{ uri: `${hoge[count].img}` }}
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sentenceContainer: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  sentence: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    height: 400,
    width: 400,
    resizeMode: "contain",
    marginTop: 20,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    opacity: 0.4,
  },
});
