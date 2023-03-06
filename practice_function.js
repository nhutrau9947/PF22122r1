let nam = parseInt(prompt("nhap so nam :"));
function isLeapyear() {
}
        if (nam % 4 == 0) {
            if (nam % 100 == 0) {
                if (nam % 400 == 0) {
                  console.log(nam + " la nam nhuan");
                } else {
                  console.log(nam + " khong phai la nam nhuan");
                }
            } else {
              console.log(nam + " la nam nhuan");
            }
        } else {
            console.log(nam + " khong phai la nam nhuan");
        };