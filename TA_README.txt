1: git init: để tạo ra file .git, quản lý lịch sử commit
2: kết nối với repon
3: git status để coi file mới chưa đc add . (màu đỏ là chưa)
4: git add . để thêm tất cả file mới vào packet
4.5: git checkout -b main để tạo nhánh mới
5: git push origin main


----
Sử dụng …or push an existing repository from the command line
git init
git remote add origin https://github.com/ngTamAn111103/Fe2-XaLo.git
git branch -M main
git add .
git commit -m "first commit"
git push -u origin main

---
tạo branch
git checkout -b main: Tạo nhánh ảo trên máy
git push oringin dev: đẩy nhánh ảo lên github thành nhánh thật
---
Tạo dự án
Tạo github
    - git init
    - git remote add origin https://github.com/ngTamAn111103/WebChat_Xalo.git