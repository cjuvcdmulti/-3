/* 학생 프로필은 designer.html에 있는 이름·사진·연락처를 기준으로 연결합니다. */
(function () {
  'use strict';
  /* 상세페이지 PROJECT 설명 문구 (페이지번호 → 이름(공백제거) → 문구) */
  var projectDescs = {"1": {"고보경": "숲의 미래를 질문하며 보존의 가치를 시각화하는 아이덴티티 프로젝트 <What If _>", "강은주": "<Filter Human & Sponge Human> 주체적 수용을 위한 사회적 관계 맺기 시각 아이덴티티 연구 <HUMAN FILTER LAB>", "김선아": "공간의 고정관념을 해체하는 XR Studio 시각 아이덴티티 연구 <D es Ou>", "김아연": "Question & Curiosity Bank 궁금증과 호기심을 해결하는 문제해결 은행 <Q?RIOS>", "김온슬": "사회적 포비아 정보 시각화 연구소 <Don't Panic>", "김채은": "자연계 순환의 대비로 해석되는 인간 가치 시스템 아이덴티티 프로젝트 <H 1/n N 1/n >", "민찬우": "지역소멸 탐색, 재구성 시각화 연구소 <There>", "박시연": "도시 소음의 중첩으로 발생하는 감각 과부하 개선 시각화 프로젝트 <S=City/N>", "박지희": "1인가구를 위한 나이트 루틴 케어 패키지<달빛 한 모금, 별가루 한 스푼>", "반가인": "와비사비의 미학을 통해 소멸의 가치를 긍정하는 비정형 퍼퓸 브랜드 <MAMO>", "서동윤": "Z세대 의기양양 캠페인 <담담.당당>", "서준원": "가능성 중심의 격려를 건네는 홈 가드닝 브랜드 <CAN>", "서하빈": "도시 환경 개선 <도시 한 칸 비움 한켠> 아이덴티티프로젝트", "신지혜": "사건,사물의 궤적을 잇는 기록 플랫폼 <Underline Archive>", "안혜원": "우리사회행복만들기캠페인 <이어져 행복 합니다>", "양서안": "사회적 계몽을 위한 긍정적 감염 비주얼 백신 연구소 <SUGARCOAT>", "이강찬": "기존 질서에 개입하는 시각적 선언연대 아이덴티티 프로젝트 <나섦기류단>", "이고은": "야외 환경에서의 간편한 식사 경험을 위한 패키지 <Let’s Picnic!>", "이기훈": "캠핑/피크닉 용품 사용자 경험 패키지 <GABBUN!>", "이소연": "버려지는 물건에 새로운 숨을, Upcycle Object Factory <After Art>", "이지민": "마음이 채워지는 사계절의 순간, 시즈너블 기프트 디저트 패키지 <Oh, My _!>", "제선우": "전형적 관계의 맥락 삭제 패키지 - NullyNully", "정유리": "덜어냄의 미학-올데이 다이어트 라이프 스타일 <BREATH.Y>", "정윤서": "패션 소품 압축 패키지 <Quiet Objects>", "조서빈": "보이지 않는 디지털 행동의 구조를 시각 언어로 재해석하는 프로젝트<IF THEN>", "채한주": "창발성의 관점으로 해석한 ‘계’의 분류와 구조의 시각화 프로젝트<Not Only>", "최고은": "을지로 공구거리 재활성화 프로젝트 <다시,을지>", "최유민": "신화적 서사가 담긴 과일청 패키지 브랜드 <신의과원>", "최은서": "소모의 철학-센티드 페이퍼 아트 패키지 <SOMO,>", "한호정": "다양한 이동조건을 가진 사용자들을 위한 직관적 경로 아이덴티티 <Right way>"}, "2": {"고보경": "나의 기준은 외부에서 형성되는가, 아니면 스스로 설정하는가?", "강은주": "알고리즘이 분류한 ‘나’와 내가 생각하는 ‘나’는 얼마나 같고 다른가?", "김선아": "AI의 답변은 나의 다음 생각과 선택에 어떤 영향을 주는가?", "김아연": "끊임없이 변화하는 환경 속에서 경계는 고정되어야 하는가, 아니면 상황에 따라 유연하게 변해야 하는가?", "김온슬": "과거의 결핍이 창의성의 원천이었다면, 모든 것이 충족되는 기술 시대의 창의성은 어디서 오는가?", "김채은": "나의 생각을 기술이 침범하는 순간이 많아진다면, 나는 스스로의 내면을 어떻게 지켜나갈 것인가?", "민찬우": "부딪히는 순간, 경계는 무너지는 걸까 새로 생겨나는 걸까?", "박시연": "내가 나라고 믿는 기준은 어디에서 비롯된 것인가?", "박지희": "나는 지금 선택하고 있는 걸까, 아니면 익숙함에 반응하고 있는 걸까?", "반가인": "우리는 왜 끊임없이 경계를 만들고 유지하려 하는가?", "서동윤": "빠르게 변화하는 기술의 흐름 속에서 인간은 무엇을 잃지 않고 이어가야하는가?", "서준원": "부딪히는 두 대상 중, 실제로 더 크게 흔들리는 것은 강한 쪽일까 약한 쪽일까?", "서하빈": "서로의 다름을 깎아내어 맞추는 것이 조율인가, 아니면 다름을 유지한 채 엮어내는 것이 조율인가?", "신지혜": "공존은 안정된 상태인가, 아니면 지속적으로 조율되는 과정인가?", "안혜원": "익숙함은 반복의 결과인가, 아니면 사회적으로 학습된 기준인가?", "양서안": "맥락의 변화로 대상의 의미가 달라질 때, 실제로 변하는 것은 외부의 대상인가 아니면 대상을 바라보는 나의 ‘인식 구조’인가?", "이강찬": "기존 질서를 해체하는 것은 파괴인가, 아니면 창조의 시작인가?", "이고은": "변화는 나를 잃는 과정인가, 나를 확장하는 과정인가?", "이기훈": "인식은 대상을 발견하는 일일까, 대상에 의미를 부여하는일일까?", "이소연": "관계가 흔들릴 때 새로운 방식의 연결은 어떻게 만들어지는가?", "이지민": "나를 규정하는 기준은 스스로 만든 것인가, 사회가 정한 것인가?", "제선우": "시대의 변화는 인간이 관계를 맺는 방식을 어떻게 바꾸어왔는가?", "정유리": "선을 긋는 건 지키기 위함일까, 밀어내기 위함일까?", "정윤서": "공존은 경계를 명확히 함으로써 가능한가, 아니면 경계를 흐리게함으로써 가능한가?", "조서빈": "대상을 어떻게 바라보느냐에 따라 나의 행동과 태도는 어떻게 달라지는가?", "채한주": "시대가 변화할 때, 우리가 당연하다고 여겼던 것들은 어떻게 흔들리는가?", "최고은": "늘 곁에 있어서 보이지 않게 된 것들은 무엇일까?", "최유민": "감각, 감정, 데이터 등 서로 다른 기준은 각각 어떤 방식으로 경계를 정의하는가?", "최은서": "나의 정체성은 고정된 것인가, 아니면 끊임없이 재구성되는 과정인가?", "한호정": "진짜와 가짜를 구별하기 점점 어려워진다면, 그것은 가짜가 교묘해졌기 때문일까 아니면 진짜가 빛을 잃었기 때문일까?"}, "3": {"가은": "Modern Times", "고보경": "사랑교", "강은주,한호정": "AI 창작 표기 시스템", "김선아": "스트레스 배양 연구소", "김아연": "START! SMART", "김온슬": "Better than Run", "김채은": "상실 관리국", "민찬우": "취준제", "박시연": "인지예보국", "박지희": "삐뚤빼뚤 대탈출", "반가인": "패션자산통제국", "백지윤": "별의 궤적", "서동윤": "100투더카", "서준원": "THE WARDROBE TIMES", "서하빈": "USE ME IF U CAN", "신지혜": "성안에서 만나요 : 성안길 성지순례 프로젝트", "안혜원,정윤서": "보통의 산만함", "양서안": "신경변이 도해록", "이강찬": "괴인관찰연구소", "이고은": "돈워리정 30DAYS", "이기훈": "Orbit Rangers", "이소연": "우리는 닳아야 남는다", "이지민": "냠냠! 마음 요괴 식당", "제선우": "중증예술외상센터", "정유리": "찌질이 약국", "조서빈": "미제 플라스틱 사건 보관소", "채한주": "그린케어센터", "최고은": "SNS외모비교전쟁대응본부", "최유민": "가치환전소", "최은서": "베지스카우트"}, "4": {"고보경,박시연": "당문당답", "강은주,최고은": "당연한 한 끼는 없다", "김아연,서하빈": "루머일보: 복원부서", "김선아,박지희": "커스텀 인형 제작소", "김온슬,조서빈": "희희락낙", "김채은,한호정": "BUB CHECK", "민찬우,채한주": "한국소음공사", "반가인,신지혜": "AQU.AI", "서동윤,이강찬": "SPOT ME!", "서준원,이기훈": "CARSIST", "안혜원,정윤서": "NEXT PLAYER", "양서안": "SHADOW SCANNER", "이고은,제선우": "S.O.SAFE", "이소연": "가벼운 죽음은 존재하지 않는다", "이지민,정유리": "GAZE", "최유민,최은서": "FEED BACK"}};
  var profiles = {"가 은":{"en":"Ka Eun","photo":"images/students/student-01.png","contact":"rkdms7472@naver.com"},"고보경":{"en":"Ko Bogyeong","photo":"images/students/student-02.png","contact":"@esiouqrut1"},"강은주":{"en":"Kang Eunju","photo":"images/students/student-03.png","contact":"@0I7_ju_04"},"김아연":{"en":"Kim Ayeon","photo":"images/students/student-04.png","contact":"@_zn03k"},"김온슬":{"en":"Kim Onseul","photo":"images/students/student-05.png","contact":"@kioxseul"},"김선아":{"en":"Kim Seona","photo":"images/students/student-06.png","contact":"@atsonnya"},"김채은":{"en":"Kim Chaeeun","photo":"images/students/student-07.png","contact":"@0chaeeun0506"},"민찬우":{"en":"Min Chanwoo","photo":"images/students/student-08.png","contact":"@qczanwu"},"반가인":{"en":"Ban Gain","photo":"images/students/student-09.png","contact":"@qksgain"},"박시연":{"en":"Park Siyeon","photo":"images/students/student-10.png","contact":"@sxiiyxx_"},"박지희":{"en":"Park Jihee","photo":"images/students/student-11.png","contact":"@mohi_.ya"},"백지윤":{"en":"Baek jiyoun","photo":"images/students/student-12.png","contact":"gena0314@naver.com"},"서동윤":{"en":"Seo Dongyoon","photo":"images/students/student-13.png","contact":"@designnooy"},"서준원":{"en":"Seo Junwon","photo":"images/students/student-14.png","contact":"@junwon_archive"},"서하빈":{"en":"Seo Habin","photo":"images/students/student-15.png","contact":"@summer.bin_02"},"신지혜":{"en":"Shin Jihye","photo":"images/students/student-16.png","contact":"shinjh7935@naver.com"},"안혜원":{"en":"An Hyewon","photo":"images/students/student-17.png","contact":"@in_hye.1"},"양서안":{"en":"Yang Seoan","photo":"images/students/student-18.png","contact":"ysa20030115@gmail.com"},"이강찬":{"en":"Lee Kangchan","photo":"images/students/student-19.png","contact":"lkc0516@naver.com"},"이고은":{"en":"Lee Goeun","photo":"images/students/student-20.png","contact":"leegoeun0818@gmail.com"},"이기훈":{"en":"Lee Gihun","photo":"images/students/student-21.png","contact":"@gih._.n"},"이소연":{"en":"Lee Soyeon","photo":"images/students/student-22.png","contact":"@1ov.ss"},"이지민":{"en":"Lee Jimin","photo":"images/students/student-23.png","contact":"@00wx4"},"제선우":{"en":"Je Seonu","photo":"images/students/student-24.png","contact":"@ovesopeor"},"정유리":{"en":"Jung Yuri","photo":"images/students/student-25.png","contact":"@yur_4432"},"정윤서":{"en":"Jeong Yoonseo","photo":"images/students/student-26.png","contact":"@yns_o.2"},"조서빈":{"en":"Cho Seobin","photo":"images/students/student-27.png","contact":"@_choseobin"},"채한주":{"en":"Chae Hanju","photo":"images/students/student-28.png","contact":"@hanju0617"},"최고은":{"en":"Choi Goeun","photo":"images/students/student-29.png","contact":"@rhdms_a.t2"},"최유민":{"en":"Choi Yumin","photo":"images/students/student-30.png","contact":"@yyuumm_in_"},"최은서":{"en":"Choi Eunseo","photo":"images/students/student-31.png","contact":"@a.g_se0"},"한호정":{"en":"Han Hojeong","photo":"images/students/student-32.png","contact":"@h0.je0ng"}};
  document.addEventListener('DOMContentLoaded', function () {
    var params = new URLSearchParams(window.location.search);
    var artists = params.get('artists');
    if (!artists) return; // 기존 URL 직접 접근 시 이전 화면 유지
    var names = artists.split(',').map(function (n) { return n.trim(); }).filter(Boolean);
    var section = document.querySelector('.detail-designer');
    if (!section || !names.length) return;

    function text(tag, className, value) {
      var el = document.createElement(tag);
      if (className) el.className = className;
      el.textContent = value;
      return el;
    }
    function photo(name, profile) {
      var holder = document.createElement('div');
      holder.className = 'dface';
      if (profile && profile.photo) {
        var img = document.createElement('img');
        img.src = profile.photo;
        img.alt = name + ' 프로필 사진';
        img.loading = 'eager';
        holder.appendChild(img);
      } else {
        holder.classList.add('photo-not-available');
        holder.textContent = '프로필 사진 준비 중';
      }
      return holder;
    }
    function info(name, profile) {
      var info = document.createElement('div');
      var display = text('div', 'dname', name);
      if (profile && profile.en) display.appendChild(text('span', 'en', profile.en));
      info.appendChild(display);
      if (profile && profile.contact) info.appendChild(text('div', 'dinsta', profile.contact));
      return info;
    }

    section.replaceChildren();
    if (names.length === 1) {
      var profile = profiles[names[0]];
      section.appendChild(photo(names[0], profile));
      var description = document.createElement('div');
      description.appendChild(text('h3', '', 'DESIGNER'));
      description.appendChild(info(names[0], profile));
      section.appendChild(description);
    } else {
      section.classList.add('has-multiple-designers');
      section.appendChild(text('h3', 'detail-designers-heading', 'DESIGNERS'));
      var group = document.createElement('div');
      group.className = 'detail-people';
      names.forEach(function (name) {
        var person = document.createElement('div');
        person.className = 'detail-person';
        person.appendChild(photo(name, profiles[name]));
        person.appendChild(info(name, profiles[name]));
        group.appendChild(person);
      });
      section.appendChild(group);
    }

    var work = params.get('work');
    var desc = document.querySelector('.detail-proj .pdesc');
    var pageNo = (window.location.pathname.match(/(\d)\.html$/) || [])[1];
    var descMap = projectDescs[pageNo] || {};
    var projectText = descMap[artists.replace(/\s/g, '')] || work;
    if (projectText && desc) desc.textContent = ': ' + projectText;
    /* 상세 이미지 경로: images/details/과목폴더/영문이름.jpg (2인 팀은 영문이름 알파벳순으로 _ 로 연결) */
    var folder = { '1': 'brand', '2': 'content', '3': 'comm', '4': 'video' }[pageNo];
    var fileName = names.map(function (n) { return profiles[n] ? profiles[n].en : n; })
      .sort(function (a, b) { return a < b ? -1 : a > b ? 1 : 0; })
      .map(function (en) { return en.toLowerCase().replace(/\s+/g, '-'); }).join('_');
    var detailImg = document.querySelector('.detail-proj .pimg img');
    if (folder && detailImg) {
      detailImg.onerror = function () {
        detailImg.onerror = null;
        detailImg.parentNode.classList.add('is-empty');
        detailImg.remove();
      };
      detailImg.alt = (work || '작품') + ' 상세';
      detailImg.src = 'images/details/' + folder + '/' + fileName + '.jpg';
    }
    if (work) document.title = work + ' | ' + artists + ' | 경계주의';
  });
})();
