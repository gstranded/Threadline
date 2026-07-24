# Git commit identity (read this BEFORE any `git commit`)

All commits in this repository MUST be authored as the GitHub account **gstranded**.

- `user.name`  = `gstranded`
- `user.email` = `hsunshinez@163.com`

Rules:
- Do NOT use any `*@users.noreply.github.com` address.
- Do NOT use `ghsunshinez@gmail.com` (it is bound to a different, unrelated GitHub account and will mis-attribute the commit).
- Before committing, make sure the machine git identity matches the two values above, e.g. `git config user.name gstranded` and `git config user.email hsunshinez@163.com` (add `--global` so it also covers every other repo on the machine).
- Verify with `git var GIT_AUTHOR_IDENT`; it MUST read `gstranded <hsunshinez@163.com> ...`.
- Prerequisite: `hsunshinez@163.com` must be a **verified** email on the `gstranded` GitHub account (https://github.com/settings/emails). GitHub attributes a commit by the email baked into it; an unverified email will NOT map to `gstranded` and the commit will show under the wrong identity.

# Git 鎻愪氦韬唤锛堜换浣?`git commit` 涔嬪墠璇峰厛璇昏繖閲岋級

鏈粨搴撶殑鎵€鏈夋彁浜ら兘蹇呴』缃插悕涓?GitHub 璐﹀彿 **gstranded**銆?
- `user.name`  = `gstranded`
- `user.email` = `hsunshinez@163.com`

瑙勫垯锛?- 涓嶈浣跨敤浠讳綍 `*@users.noreply.github.com` 閭銆?- 涓嶈浣跨敤 `ghsunshinez@gmail.com`锛堝畠缁戝畾鍦ㄥ彟涓€涓棤鍏崇殑 GitHub 璐﹀彿涓婏紝浼氬鑷存彁浜ゅ綊灞為敊璇級銆?- 鎻愪氦鍓嶇‘璁ゆ湰鏈?git 韬唤涓庝笂闈袱涓€间竴鑷达紝渚嬪 `git config user.name gstranded` 鍜?`git config user.email hsunshinez@163.com`锛堝姞 `--global` 鍙鏈満鍏跺畠浠撳簱涔熶竴骞剁敓鏁堬級銆?- 鐢?`git var GIT_AUTHOR_IDENT` 鏍￠獙锛屽繀椤绘樉绀?`gstranded <hsunshinez@163.com> ...`銆?- 鍓嶆彁锛歚hsunshinez@163.com` 蹇呴』鏄?`gstranded` 璐﹀彿涓?*宸查獙璇?*鐨勯偖绠憋紙https://github.com/settings/emails锛夈€侴itHub 鎸?commit 鍐呭祵鐨勯偖绠卞仛褰掑睘锛涙湭楠岃瘉鐨勯偖绠变笉浼氭槧灏勫埌 `gstranded`锛屾彁浜や細鏄剧ず鎴愰敊璇殑韬唤銆?