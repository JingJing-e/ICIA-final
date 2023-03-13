# yurane-final-project

22.11.30부터 시작하는 final project 업로드용

\*\*git 상태 확인하기(변경 사항 있는지 등 수시 확인 필수)

- git status

git 브랜치 만드는 법

- 터미널에서 git branch '생성할 브랜치 이름' master

git 현재 브랜치 확인하기

- git branch

브랜치 이동하기

- git checkout '이동할 브랜치 이름'
- 이동 하기 전에 반드시 add commit 한 다음 이동할 것

푸시하는 법

- 수정한 내용이 있는 경우

1. git add '수정한 파일'
   (전부 add 하고 싶을 때 git add .)
2. git commit -m '내용(로그인수정1차)'
   여기서 남긴 내용이 작업내용으로 저장됨
3. git push origin '작업한 브랜치 이름'
   깃허브에서 request 보낸 후 박지용, 박윤희 에게 전달
4. 이후 pull 공지할 것임

pull 하는법

1. 작업중인 내용이 있는 경우 파일 저장 및 add commit
2. git checkout master 로 master 브랜치로 이동
3. git pull origin master 로 풀 땡김
4. 작업하던 브랜치로 이동
5. git pull origin master 로 브랜치 최신화
6. 작업 진행
