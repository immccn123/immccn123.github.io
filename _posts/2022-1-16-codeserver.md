---
title: 如何使用code-server
layout: article
sub: "1"
subtitle: 听说code-server是一款很强大的WebIde。
img: https://s2.loli.net/2022/01/19/gU9WXNC1YZpOwtP.png
categories: [code-server, 实用工具, 开发者文档]
---
Code-server是一款很强大的Web-ide，基于VSCode开发。

> ### ~~广告~~
> ~~这是一款非常好用的web-ide，免去了我多年以来的烦恼。赶快下载安装吧！下载地址：......~~

您现在看到的这篇文章就是我通过在我的轻量应用服务器上运行的code-server撰写的。

### 什么是code-server?
Code-server是一款可以让您在浏览器编写代码的小工具。您可以自行部署`code-server`（在您的服务器上），而无需使用`vscode.dev`提供的又慢又难用的浏览器代码编写服务。

#### code-server是怎么在浏览器中运行的？
很简单。实际上，VSCode就是一团由TypeScript编写的文本编辑器。

![ts.png](https://s2.loli.net/2022/01/19/n1XybpGkjegwivl.png)

上图：GitHub上的vscode的开源仓库
### code-server的优势
随时随地写代码。~~（还不用安装那些乱七八糟的环境）~~
## [重头戏] 安装code-server
截至文章写作日期，`code-server`发布了他们的`4.0.1`版本。

[下载地址：https://github.com/coder/code-server/releases/tag/v4.0.1](https://github.com/coder/code-server/releases/tag/v4.0.1)
你可以看到他们有的版本。
![code-server-release.png](https://s2.loli.net/2022/01/19/rfYmb5CqQ82J3ZF.png)

根据您的系统架构和系统版本，选择合适的软件包下载，并通过您的系统自带包管理器安装。
Arch Linux 以及衍生发行版系列用户可以通过AUR安装。
#### Debian, Ubuntu, Deepin, UOS, Pop!_OS以及其他基于dpkg的发行版
```shell
curl -fOL https://github.com/cdr/code-server/releases/download/v$VERSION/code-server_$VERSION_amd64.deb
sudo dpkg -i code-server_$VERSION_amd64.deb
sudo systemctl enable --now code-server@$USER
```
#### Fedora, CentOS, RHEL, SUSE
```shell
curl -fOL https://github.com/cdr/code-server/releases/download/v$VERSION/code-server-$VERSION-amd64.rpm
sudo rpm -i code-server-$VERSION-amd64.rpm
sudo systemctl enable --now code-server@$USER
```
#### Arch Linux, Manjaro 以及其他基于Arch Linux的发行版
###### 方法1（使用您的AUR软件管理器）
```shell
yay -S code-server
sudo systemctl enable --now code-server@$USER
```
###### 方法2
```shell
git clone https://aur.archlinux.org/code-server.git
cd code-server
makepkg -si
sudo systemctl enable --now code-server@$USER
```
#### MacOS（使用HomeBrew）
```shell
brew install code-server
brew services start code-server
```
#### Linux通用安装指令(不推荐)：
> 注意：请一定根据您所使用的发行版选择合适的方法！这条指令只是在您实在没有办法时才可以使用！

```shell
mkdir -p ~/.local/lib ~/.local/bin
curl -fL https://github.com/cdr/code-server/releases/download/v$VERSION/code-server-$VERSION-linux-amd64.tar.gz \
  | tar -C ~/.local/lib -xz
mv ~/.local/lib/code-server-$VERSION-linux-amd64 ~/.local/lib/code-server-$VERSION
ln -s ~/.local/lib/code-server-$VERSION/bin/code-server ~/.local/bin/code-server
PATH="~/.local/bin:$PATH"
code-server
```

### 配置code-server
您的code-server配置文件位于`~/.config/code-server/config.yaml`。它看起来应该是这样的：
```yaml
bind-addr: 127.0.0.1:8080             # 建议：如果您在一个服务器上运行code-server，不要使用nginx反向代理，并且把127.0.0.1修改为0.0.0.0以从其他位置访问。
auth: password                        # 这个配置项不要乱改
password: [一串随机的十六进制数]        # 修改密码
cert: false                           # https专用 - 配置参见官方文档
```

### [题外话] 我没有服务器，怎么办？
买一个。

[![【腾讯云】热门云产品首单特惠秒杀，1核2G云服务器首年38元](https://s2.loli.net/2022/01/19/zMxt3RgJwKkNZ4f.jpg)](https://curl.qcloud.com/uegpx96F)