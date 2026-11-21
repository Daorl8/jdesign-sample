# STRUCTURE · jdesign-sample (v0.1.0 · 블랙 프레임 · 검정 + 흰 · 모서리 2px · 배포 예정 jdesign-sample.lgt3232.workers.dev)

```
jdesign-sample/
├─ index.html                 단일 파일 (CSS · JS 인라인)
├─ wrangler.toml              name = jdesign-sample
├─ .assetsignore              img/ · _old/ · 문서 · index_*.html · _deploy 배포 제외
├─ jd-archivo.woff2           영문 워드마크 · 제목 · 라벨 (Archivo wdth125 600–800, 영문만)
├─ jd-pretendard.woff2        본문 · 한글 (Pretendard 300–700, 페이지 글자 전부)
├─ jd-hero.webp · jd-hero-m.webp   히어로 #10 (PC 16:9 · 모바일 4:3, <picture>)
├─ jd-g01 ~ jd-g12.webp       WORKS 12장 (4:5)
├─ favicon.png · og-jd.jpg
├─ img/                       다올 제공 원본 80장 + _원문.md (배포 제외 · 레포에 올리지 말 것)
└─ CHANGELOG.md / STRUCTURE.md
```

## 섹션 순서
헤더(검정 · + 900 미만 `.snav`) → 히어로(검정) → `#works`(흰) → `#projects`(연회색 · 16곳 블로그 링크) → `#about`(흰) → `#contact`(검정) → 푸터(검정) + 모바일 `.quick`(검정).

## 버튼 · 링크
- 전화 `tel:01054815706`(메인): 헤더(900 이상) · 히어로 · 문의 · 푸터 · 하단 바
- 네이버 톡톡 `https://talk.naver.com/wvbr1ei`: 히어로 · 문의 · 하단 바
- 인스타 `https://www.instagram.com/jdesign__interior/`: 히어로 · 문의 · 푸터 · 하단 바
- 블로그 글 16개 `https://m.blog.naver.com/j_deisgn_/{번호}` · 블로그 · 네이버 지도 `map.naver.com/p/entry/place/1364104841` · 플레이스

## 모션 (강제 재생 · 다올 방침)
- 히어로 `.intro` 등장 · 섹션 `.reveal`(setInterval) · 앵커 rAF 스크롤(R-25). reduced-motion 분기 없음.

## 폰트 재생성
문구 바꾸면 빠진 글자 검사(LESSONS §26). 한글은 Pretendard만, Archivo는 영문 · 숫자 · 기호만.
