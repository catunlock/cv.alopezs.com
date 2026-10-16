import json, os
T = {
 "noche": dict(bg_editor="#16181c", bg_side="#1b1e23", bg_activity="#111317", bg_title="#111317", bg_panel="#16181c", bg_input="#22262d", bg_hover="#252a31", bg_select="#23392c",
   line="#2a2e35", line_strong="#6c7380", ink="#e6e2d7", ink_muted="#a29e93", accent="#94d181", accent_soft="#1f2e1b", on_accent="#0d130b",
   status_bg="#2c6a43", on_status="#f2f5ef",
   syn_keyword="#e8a65f", syn_string="#a9d68c", syn_number="#f2958a", syn_comment="#908c83", syn_type="#7cc6dc", syn_func="#92b8f2", syn_key="#cfa9ea",
   term_ok="#94d181", term_warn="#e8c35f", term_err="#f2958a", term_path="#82b4ec", focus="#94d181"),
 "dia": dict(bg_editor="#fbfaf7", bg_side="#f2f0ea", bg_activity="#e7e4dc", bg_title="#e7e4dc", bg_panel="#fbfaf7", bg_input="#ffffff", bg_hover="#e9e6de", bg_select="#d9eacf",
   line="#dcd8cd", line_strong="#7f7a6d", ink="#1d1f22", ink_muted="#57544c", accent="#2c7238", accent_soft="#e1efdb", on_accent="#ffffff",
   status_bg="#2c6a43", on_status="#ffffff",
   syn_keyword="#a0410c", syn_string="#2c7238", syn_number="#b3301d", syn_comment="#67645c", syn_type="#11667f", syn_func="#2556a3", syn_key="#7a3e9d",
   term_ok="#2c7238", term_warn="#855c00", term_err="#b3301d", term_path="#2556a3", focus="#2556a3"),
 "placa": dict(bg_editor="#0f3a2b", bg_side="#0c3124", bg_activity="#09271d", bg_title="#09271d", bg_panel="#0c3124", bg_input="#14463a", bg_hover="#17503c", bg_select="#1e5a45",
   line="#1f5642", line_strong="#7d9f8e", ink="#efebe0", ink_muted="#b9cbc0", accent="#eeac6a", accent_soft="#3b2a1b", on_accent="#160f08",
   status_bg="#e09a56", on_status="#160f08",
   syn_keyword="#f2c862", syn_string="#ace2b8", syn_number="#f3a596", syn_comment="#a6c0b2", syn_type="#93d3f0", syn_func="#f2bd82", syn_key="#ead8ac",
   term_ok="#ace2b8", term_warn="#f2c862", term_err="#f3a596", term_path="#93d3f0", focus="#f2c862"),
}
def lum(h):
    h=h.lstrip('#'); r,g,b=[int(h[i:i+2],16)/255 for i in (0,2,4)]
    f=lambda c: c/12.92 if c<=0.03928 else ((c+0.055)/1.055)**2.4
    return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b)
def cr(a,b):
    la,lb=lum(a),lum(b); return (max(la,lb)+0.05)/(min(la,lb)+0.05)
BG = ["bg_editor","bg_side","bg_activity","bg_title","bg_panel","bg_input","bg_hover","bg_select"]
checks = [("ink",BG,4.5),("ink_muted",BG,4.5),("accent",["bg_editor","bg_side","bg_panel","bg_input","bg_hover","accent_soft"],4.5),
  ("on_accent",["accent"],4.5),("on_status",["status_bg"],4.5),("line_strong",["bg_side","bg_editor","bg_input","bg_title"],3),("focus",BG,3)]
checks += [(k,["bg_editor","bg_side","bg_input"],4.5) for k in ["syn_keyword","syn_string","syn_number","syn_comment","syn_type","syn_func","syn_key"]]
checks += [(k,["bg_panel","bg_editor","bg_input"],4.5) for k in ["term_ok","term_warn","term_err","term_path"]]
bad=0
for t,p in T.items():
    worst=99
    for fg,bgs,mn in checks:
        for bg in bgs:
            c=cr(p[fg],p[bg]); worst=min(worst,c/mn)
            if c<mn: bad+=1; print(f"FAIL {t}: {fg} on {bg} = {c:.2f} < {mn}")
print("fails:",bad)
json.dump(T, open(os.path.join(os.path.dirname(__file__),'palette.json'),'w'), indent=1)
