# 現場AIラボ｜AIマニュアル作成パック LP

株式会社メリットの「AIマニュアル作成パック」ランディングページ。

**公開URL: https://merit-jp.github.io/Genba-AI-Lab/**

GitHubリポジトリ: https://github.com/merit-jp/Genba-AI-Lab （ブランチ: `main`）

---

## ファイル構成

```
genba-ai-lab-manual-lp/
├── index.html        # LP本体
├── style.css          # デザイン（末尾の ?v=N はキャッシュ対策のバージョン番号）
├── script.js          # ハンバーガーメニュー・FAQ開閉・料金/課題アニメーション等
├── demo-manual.html   # AIが生成したマニュアルのサンプルページ（現状LPからは未リンク、将来リンク予定）
├── README.md          # このファイル
└── images/            # 画像一式
```

### 画像ファイル名について

GitHub Pages 上での文字化け・パス崩れを避けるため、画像ファイル名は日本語からASCII名に変更済み。

| 旧ファイル名 | 現在のファイル名 | 用途 |
|---|---|---|
| 現場AIラボ_logo_color.png | `GAL_logo_color.png` | ロゴ（カラー版） |
| 現場AIラボ_logo_white.png | `GAL_logo_white.png` | ロゴ（白版） |
| 電話の受話器のアイコン素材.svg | `phonIcon.svg` | 電話アイコン |
| 現場イラスト.jpg | `GenbaIllust.jpg` | Aboutセクションの二人の写真 |
| Vision.png | `vision.png` | ビジョンセクション挿絵 |

**画像を差し替える／リネームする場合は、`index.html` の `<img src="...">` と `style.css` 内の `background-image: url(...)` の両方を確認すること。** 特に `.about-photo-bg` の背景画像は `style.css` にしかコードが無く、`index.html` 内に `<img>` タグは存在しないため見落としやすい。

---

## ローカル確認方法

### 方法A: Python の簡易サーバー（推奨・すぐ使える）

```bash
cd genba-ai-lab-manual-lp
python3 -m http.server 8791
```

ブラウザで http://localhost:8791/index.html を開く。止めるときは `Ctrl+C`、またはポートを使うプロセスを kill。

### 方法B: VS Code + Live Server

1. VS Code でこのフォルダを開く
2. 拡張機能「Live Server」をインストール
3. `index.html` を右クリック → 「Open with Live Server」

---

## 現在の実装状況（セクション構成）

1. **Hero** — キャッチコピー＋CTA。**背景写真は未設定（プレースホルダーのまま）**。実写 or Midjourney生成画像の差し込みが必要（`index.html` 内 `★` コメント参照）
2. **課題（Pain）** — 「こんな課題、ありませんか？」＋吹き出し4つ
3. **私たちについて（About）** — 二人の写真＋会社紹介。スマホ表示のみ、写真の上に見出し「現場AIラボとは」を独立配置（写真への重ね書きではない）
4. **私たちのビジョン（Vision）** / **サービスの正体（Bridge）** — **見出し・本文がまだ草案のまま**（`★ 見出し・本文は要詰め` コメントあり、要確定）
5. **レビュー（Voices）** — お客様の声3件
6. **サービス（Tools）** — 3ステップ説明
7. **料金プラン（Pricing）** — 3プラン＋月次相談プラン。**スマホ・PC共通で常時全項目表示**（アコーディオン開閉は試したが「全部表示のままがいい」とのことで元に戻し済み）
8. **よくある質問（FAQ）** — アコーディオン開閉式
9. **最終CTA／フッター** — 電話・オンライン相談予約、運営会社情報

### モバイル対応で個別に調整した点

- ヘッダー／フッターのハンバーガーメニュー内CTAボタン（オンライン相談予約・今すぐ電話する）はヘッダーと同じ配色・中央揃え
- 課題セクションの吹き出しはPC同様に左右ジグザグ配置
- 料金・Q&Aセクションの見出し上に小さい青字（eyebrow）を追加、他セクションと統一
- セクション見出しの文字寄せをモバイルでは全セクション左揃えに統一

---

## 今後の開発フロー（GitHub CLI連携済み）

このフォルダは `git` 初期化済みで、GitHubリポジトリ `merit-jp/Genba-AI-Lab` の `main` ブランチに接続されています。`gh` (GitHub CLI) でログイン済みのため、以降は以下の流れで反映できます（Webサイトからの手動アップロードは不要）。

```bash
cd genba-ai-lab-manual-lp
git add -A
git commit -m "変更内容の説明"
git push origin main
```

pushすると数十秒〜1分程度でGitHub Pages ( https://merit-jp.github.io/Genba-AI-Lab/ ) に反映される。

`style.css` / `script.js` を編集した場合、ブラウザキャッシュ対策として `index.html` 内の読み込みタグの `?v=N` の数字を1つ増やすこと（例: `style.css?v=5` → `?v=6`）。上げ忘れると本番で変更が反映されないことがある。

---

## 未対応・要確認事項

- [ ] Hero背景写真が未設定（プレースホルダーのまま）。ローカルには新ヒーロー案（人物＋タブレットのイラスト、`demo-manual.html`をiframeでライブ表示）が未コミットで存在。完成させるか、実写真（大安工業「焼け取り」マニュアルの実写など）に差し替えるか要決定
- [ ] Vision / Bridge セクションの見出し・本文が草案のまま（要確定）
- [ ] `demo-manual.html` をLP本体からリンクする（現状は独立ファイルとして存在するのみ）

## デジタル化・AI導入補助金2026 ITツール登録に向けた対応状況（2026/07時点）

現場AIラボ（Webアプリ本体）が完成したことに合わせて、LPの内容もアプリの実態に合わせて更新中。**申請フォームの入力を優先し、LPの最終反映（コミット・push）は申請直前に一括で行う方針。**

- [x] 電話番号／FAX番号の入れ替え修正（ローカル済・未push）— 電話:0748-55-8017 / FAX:0748-55-8027
- [x] サービス説明（3ステップ）を、旧フロー（スプシ入力→Claudeにコピペ→Googleドライブ管理）から、現場AIラボ実際の使い方（写真・説明を直接入力→保存→Web/PDF自動生成・共有リンク）に書き換え（ローカル済・未push）
- [x] 料金プランを、都度買い切り型（¥150,000〜¥1,200,000）から、月額サブスク3段階（スタンダード¥19,800／プロ¥39,800／伴走開発¥98,000〜）に変更（ローカル済・未push）。大安工業への¥200,000は「product化前のパイロット開発案件」として位置づけ、現行プランとは別軸のため料金表には掲載しない方針
- [ ] Hero差し替え（上記）
- [ ] 上記すべてを `git commit` → `git push` して本番反映（申請書提出の直前に実施予定）

## 将来の独自ドメイン候補

- `genba-ai-lab.merit-shiga.com/manual`
- `merit-shiga.com/manual-ai`
- `ai-manual.merit-shiga.com`
