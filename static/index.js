const str = "\
    _                                    ______  _____ \n\
   (_)___ ___  ____ ___  ______________ <  /__ \|__  / \n\
  / / __ `__ \\/ __ `__ \\/ ___/ ___/ __ \\/ /__/ / /_ < \n\
 / / / / / / / / / / / / /__/ /__/ / / / // __/___/ / \n\
/_/_/ /_/ /_/_/ /_/ /_/\\___/\\___/_/ /_/_//____/____/  \n";

console.log(str);

var ttx;
window.onload = function () {
    ttx = document.title;
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) document.title = "看不见我！";
        else {
            document.title = "没想到还是被你看到了。。。";
            setTimeout(function () {
                document.title = ttx;
            }, 1000)
        }
    })
}