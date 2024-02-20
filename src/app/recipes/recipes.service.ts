import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe("jablecznik", "Dobre ciasto", "data:image/jpeg;base64,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"),
    new Recipe("karpatka", "Ciasto z kremem", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYZGBgYHBgaGhgZGhwYHBgZGBgaHBgYGBgcIS4lHB4rIRgZJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQsJCs0NDQ0NjQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ2NDQ0NP/AABEIAMYA/wMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAD0QAAEDAgUBBQYFAwIGAwAAAAEAAhEDIQQFEjFBUQYiYXGBEzKRobHwFEJSksFi0eEH8RVDU3KCohYkM//EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAApEQACAgIBAwMEAgMAAAAAAAAAAQIRAyExBBJBE1GBFCJCYTJxBVKh/9oADAMBAAIRAxEAPwB5WqIF+IV1UygKzVtSMbZe2rKKphBYYJgwoSIiQMKwPVL3KIclossk96j7ZReqoRoFlxqrkqpoVwRZCKg5quC8QlCDuYo6Vc5RlQhXpXlcFVUCJCmq1BPajwqKzFCALlU9qvexVEIkF2IYqWORmIag9MIkLamyBrIslUvagQGFRSa9cNJQLYRIFAKbWKOHuiSEAkGtXSxSaVMkIEKC1TY6FxyhKBDcuahK7E1e0Iaq1N3FfaB0GIlpUWgLj1LJRcXKh1W6re9UuKiQWGa1xjkO1ylT3RAHBq4Qu01IsSsZEAvEqWlRIQCD1HLjXK1zFU5kIoDPF69qlDkmYTzA5XLZcEJTjFbGjFydIUPKqeVoqmWt6JTi8DGyWOSDGeKS8Ct4VD2phTwL3mAE5yvs2Z1Pv4IucV5AoyfgyVPL6jz3GE+PCJHZisbwAvpmGwbGWgIotb0S+r7Dem/J8dxeSVWbtlKqlNzd2n4L7disA142WcxOTNm4TKaYvYz5jKpqtW7zPszquxp9AoYXsk22sGfFHuSIoyMZhginNWuxXZljRIEFIMXgSxHuTA4sVzC8aijVKtwuHc9wa0SSiArUqVMk2BK3mR9kmwHPEnxWpo5FTaPdHwSOSQe1mZBVdQK4BQqIi0BvML1MyuVwuUSmAdq0lPB5a+oe7sOVLVK1WSUdNMHr/KqyZOxWWY4d0qMviMuew3Hqq2U1scTSa626UYnLCLiAD1t9Uscya2PLC1wCYLDOeYaE8o5B+olFZOym1kte09SCDfofFHnFA7X8kks8fcMcL8oTvyBvUoPE5LGxWjL3HhDVWvPCMZtkeNGUrYN7eJQlQLXPoPO7UE7KNZuCrVNCSxvwZjCsmo3zW5o0e4IQ+D7NMa7U6bcA39U7EMEAAAKnMu9j4m4IQ1crqno0eJ/gKitloAE1GniIO/QJpmWYBrbd50Ohoi54ufEhYXtFmz3vc1mtlw6Xd0gQGkBvS28ndZpQhjVuzZjc8jpUjZ5Zg2CYIJBgxwRwjqrg0LAdl85bhnvbUcYqw7WTMETY+claalmbK0ljpjfgj0VbzrttBeCUZUw41CrsICbqiiyQin4plFsucJTY5t7b0LNKqS2GNYhXvpzwSPHlJcZ2nZpOmT5bLGnNHteXsb1txdGXVQi0lsMOllJNvR9JdixBiBChUriAYEFfP8B2hcwEvAdckT16lRZ2kqPeWkgtmRBgeSvjnhKqZVLp5xbNpiqbXjYjxCzma5G+CWnUOnKLw2ZEslwLZPnEIyliNRPe/wBlbplf3LR8zfgnmpoiDPwW67O5E1kGJceUyr0KbjJaAd55THKGTPgpOUtJCxittjPDUg1qqxdeOVZVfCT40EndL4GStiCqYVQepV1SCtBlRys2VUxivJVTXXUsNF9KnJA6kLYAaKfAAHKzeVCajRCfZy8wGgeY+g/lc7r5VE19LG2J8TmDiDpOhhIGswHQN9PMn6CUsxtNz26w4u8O8e7N+8d5kI7H0O4IAgmXHa4jqfH6qGHcGt0Tq5PS3AHAXM23T9jp2oq0C0azg0ACGxeG93U0/mm20b9bJphcS8MDhIc4i5MCSQBA5JET5r34Rj2gRETYGAdveHOyi+m/UZHd7ob8gPWOVerjsqk4y0PcJmxkNeAeNQF/MhNtYWbwbGgXiBEAcW6+iaUMVMBXw6itNmaWJPaGQIiSq6j7WtfcD+fQrmufAbXtP3dVufO+02+Jutfdop7Tr6hMgDjn5FLsRir6CQeu5vy0W3g/O67jTIJPIMAWgW53nug+aVYnFAaS4kRyLkHYT16R/UqpZknRZHFYXUrDTqdcMkj3WiBBMW6fIoXE41kEksuAJi+k7gEf3tCRY7HaT3XPadTXHvSfd75O4mSQJH1Ep8RjHgHST3o3ABMXmY7wmRHII2Knrrgsj075K84oe+4HU0EwDOoD13G23Vd7DY0/idDjZ4IHmLj+UNWxpdqbYB0CABM7af6edt4vcoHAvNHEMfBGh4PpMG3lKyzUbtcM2RtwafPg+u49zmt7tj1/sstiGOce84kndbDHObpa+bOG3zWYqC5WPrn6e0/6F6d2LzQAQTq1NroP90ZmVTSI5SCoJWHDllJXI3rGmrGbsMx47hBQL8N7N4cACRxwUNTe5hltk1wFUVSWuA1deq3Qyb1yUzg4re0dw+PLxJkRa211bh8wLHaomRG/wXq1NtOZG4t5pWzVK2/UtJXyZlhjK6WjW4OuXwdRB2hM21zSIIJvx1WQw2Jewhw4TWk99TS/VG4I/lacXUxlryZsvTuO/BrMHihVJEwRuEwbhWrK0abGNcGO7wvqnlQyrPnlxabxPqrJZIxaT8lKxSkm14BKl0LUsvGsq6tSVrMVEg5QDbwNz/KqDkfktPXWaDeL+o2QbpWFK3RocsyJ7C17ngRciFdiAHOc4H48cfRNcwfopwNykGKqllOTYkmB/P1XI6vKnJJ8JWdDp4UteXQtzPEgmBsPuyXUqolCYioXFTw7LiVxpdQ3KzrLCoxNBgnlNGUdTSDylWX8J9h9l0sElOOznZlTKG0QW6drR5QrMFhdLpJ2k/AKFcOF2ib3Hn0RuHJDZNif4WiOOLabXBW5NR55CC4Rt0v0S7EPIO8jyvYyB80W6qGgTyP4SXMnuPuj/HijmypR/YIRbkUY/GkkDaOB8YS7H1BYG44i0Rx53K6ygZJO+/8AhexOkgnloJ/lZO9tNs0qMU0kL8Rho724dYi0/EpNWp3gG39v91pKILmajAESDzcbfT4rP47EhpIiT9AjJpU0WQttpimtTI2PjH34GEK5ziXFxkzf15R+Ir+Q8/LYdeE07GZJ+JqF7v8A82FpPVx3DfLb0Tptqh21H7mfRcU3/wCvTB3DWz8Fn67w0E8rT506GL5/mmMdMLB/kG5ZFCPtsXpI2mwHMKxLtRQpqhT9i952+KoxFMtMFJHE4xVo6KlFvtRF7wu4XFFjw4cIclRc5OlXBJRTVM1LCK4lu3J6INjLkI3s7RIokn85MeSgaelxCvcXow9yTcV4OaLIsUzpHCqbCtH/AHJ1GiuTIkkCAZ8kmZXdTrOmbytGx7WAEEF3KzvaSvqIIFz0Ry2kt7GwtOTTWgxzlE1VAtPRUva7ovRUefsvdVT3sYQ7EEk+4xzvO7Rf9yyrg7otl2HaDTqCYeX3E30BogxvEuddU55OMG0rLMSUpKzQ4xxeT0F/VI83Z7oPQyB/jyT/AEabnYA+v3dIc1xQBJNoN56GwPyK8/nTcH3ct/8ADq4f5KvAjdQMxpCbYfIwW6nOLTwBEfAhK8NmLHFoJE8H1iD98rQ4bHtdABgkdfp4+Cz4MOP8tmnNLIuAU0PZOaJJmbxAEGBfrY2TnCvkDn73QFXMAAZaS0RIN5692L/fRXDMAQDBvHF/MxxBlbccIxb7X8GSblJbQdiBaeqpqVnu0gAk7SdgNpJ6oGrmbROqQGi8i/gIHJQdPNyQSxhJJ/NvA5gbCbT4K55FxYkccuaNFiKrGiXEd25JMNEXJvYBI2dosPUeWtqMBBgajon/ALdUAjylZLtJmr6jyzVLQRYbSBBNt+QpdjsM1r6jy3WQ1oANzDnXgxbYKv105UtGpdIo4nKT2a+k5j2l9Nwe2T3mODgSBtIWdpv1lzJjVMneL389k+GIpNIpMABJMNaCL3mTtJPKqqYemx+v2fvDcEiT4gcoyipU01rTKIy7W9PfBGo1raRA2axrRO+4AJ9VmsXhxBcRG8z9VrixjwWuYQPAmx4PiqcHgmMfLyHOMaWluxH5pmCeh4RcLZIzpP3MZU7K1HsL3ODD39FMkanQN3SeSRbf4rVf6YYY/hnu5NVw/Y1rfrKE7Q406/ZhrY0F0wBe+533C1H+n+G0YJh/U6o741HQfgArsaUnSXBM0pKFt8h+bt7hMbL5rjXjWXE38l9DzsO0OLT5r5zjcK6oSNd1RmhF5LrZZ0zai9l1LEgjdAZhSLtkDVyaqLh1uqqb7enuC4KOKkqZfH7ZdyZMZc8lNcHkjJBc6Y44lC4XMNdtj0Ka4epEE2A3Vfp1+x55ZPXA2fUbTZcgQLLL47M5Pd3TTE4DWQXPGk+OyMpZdhmATBO1ynjjc+dJGbvUN8tmVZj39JVgx7/0lbShTw4HuNRZNMt0hgA8lasEX+Qr6h/6mCbj3IbHYgucBBPSLlfQhltDlg80rzDI++x9EXbMjqCCEsumrd2NDqE3xRccKFA4QJgbKtzl27OHQEcE1O+z1cscKVgxxcZgTMWEztbxKWq/D91zXdClmu5UGOnZrKtCdpWezjCMexwIlpBn/B4IWjqOcWtLfzAH4jlL3Zdy93oFyMuJyfal8+x0cWRR22fJ8Nk72Vg0uOkn9zZ2MLeZfkLTBl8hwIv8ttkXVyls6o5/2ITfANgQd+vVLiw1L70mXZepcl9rM5j+zlRsPbUEEnUC0k960tcDIMc7WBSzEtqsGqACxou5xi9iBNtX9R9BML6BUdNkLWoagQWgt5kWPQq2WCP46Ko9TL8lZ87GcsYxjQ5wJPfAa5wAvOm0dONrKYq4nEtihReGWb7V4azUACLF0W32JPC1uGygCpMNLehaN/D+ycOiYFgLJY4G19zLJdSou4q3+zAYbsRW3e9jT0BLj6mAisNklai+BDmvLQ7jmxB43PxWwnvRyoViTCMukx8q7F+tyy06r+jPPY9lVhLHXJ1hokmBY6p909J817E5iGvaxwOoiQzu6YImCTexB6beS0j3k7CyEfg9Rk8ccbRtzuj6DS0xPXi/5IT1c9a0E6RAgSZAJMkNHV23d/sUO/NC52t4DWtjQJaNRPXdwi07xtuE+/4XTI9xvNoHPMJPmXZSm9uho0AkEkE6tUaWm8gkDqCi8clsMZ4+ODG5tnIfph5BeSHkD8p1AAE7jYj57r6X2BxzamDptbvSHs3D+pomfIgg+q+f47sM5lhXBAII1tg87EG+60HYBrqNV1OQQ8GRsQ5oJB+o9UYRcZByyjKFI12OBk9CsDnGFDKgIPvG4W/zAb+Cw2a6XPHUXJWTM33pfst6fS+COGqNiCJheqMZP8IZoPWFcxit5JwwHG5ZTfcd13UfyiKeGPs9J+PVHsog8owOb7sWCMYryB5WjI1sM+bCY4kwrsNl1UuDtAkbXJAWnZQZxZMKYhsBPHEgSzsy+HyCu4HW+Bc24XBgcS0EB5dG3kFrACd1OkyxKPoxYizPyZQYquwXaSfkOqIwuaVLy3pFk+fSDj/K7VwTYiErxPlMPqxfKBHiVxtMIo4deNEBdazl0RGGELzKBNkTThTYRIjkgJeBqNDQPcbaDpFulkurOJBB4+5TR9mwPJI31DrcD5Qss3wXxQS1w0gn1lTcTYNQeMqGzAPueENVxb2CGN1OP6naWxyZEkqtySdMeMHLgZ+wd1hWFkCNykzs1eydXeMWAAG8Q2xN4n5Kbc2E3FgASQZN/DeEVKAXCQydqDO8IieeOqr1bR0UjU1tsqaRuWdD8k9UVnWmPBRgm94iymW3O3qov1awOC0mehHCDdESLGhTAXC28Ltawt9+KIBXm2cNoiGjW+JgRDRb3jO/QJczOHu0P1Mcwgag0guaT4g7npCtxNMP1MZu4Fz3wLWbffwS+q+npDA/U8GdREgwCG87X+SzSnJyuzXGEVGq2C5riy9xLmEBrgGd4tkw4ngxMILI8S6njKRLu66o0eMP7on9yJrUHlha46Q0t3NoiCZPnKBzNhYym8CCHWO0FriAfi1VuTUrLlGMo18H03MBMjqF8/xzC17vNbmjihUp06v6mNf+5oKxWaVJe4xyhlSclITC2rQJT2ury+Ag2PV3tLhFPQzQax8gdSi6SWU6hJsCj6IIumiVSQZAhXUn2S2rjA1waQfPhF0cQ07EJ1LYji6Dmv38lHWYAQFTHjYepXaeKsj3xvkHYxjR+QU6lcQlf4/oLK2hWLpgbdVPUjwidjW2WvqOKr1EqDXuuusrdV0jAFMYYXaE62A7amj/ANgu0KvCvwHeqNBEgGT4RsT4TCD4GQ5xeJgkc8R180qawl+q8n6oytXGom1uTv6BVYKYJPGywp90tmmqQJiqhZe8kwI3+5VDKLWsL3ye9fUJnT+Vs+PPmjcX1jYAxxvz98pU+s97S1wiXEiTvbb5FZ8jqTfnwXw2tfIE/OQ5+ksgExq6SdwItJi6vptfqcS0BgDQYn3WmY6nmUjzNuiZVWVdpgxzab2ueHQxmga3FxdYQTcXi3gqYZXJ9rL5Y/tuKNnlTyWkCYIJGoQRciI+90wY0dL9UHQrtYe/YkWJs0AmSDPMpkyl3Y8VuxPVXtGHJzZ7QDA+P91DEvsA3cKWkNF+VytZlh5q0QqDxBnpKUY7E+0LGMJAnfku2mBeAF5lVzy4TAMgnoP5RVB9NjJbNyRr3cT08vALNkl3aul5LoxrfkXZzjW0WvDPff7zjc9JjYWWB/4pDyL7xda/NAw97SQT+YknxsDx6dFhdTGVmyIbMu6byDfbhY2pOTv4o3YlFRNy1prYZ0NM6InyMgeNwFRm+FccP7suBaL2s0i5PofimOSZm2oHtZYNAmOJ8vVTfhn1Hsa0ahr75mAGSRyb2v4q9RtLyylNxlvVbLuyLw7Bt1H3HVGf+5cB5w4LJ51jQ15Ft1bXfUw73sZUhjnvIG43g6hwbRZAYzCU6gMghxMkg39AmyY5OktDY5RUnKXkBfmkKsZxedQ8laez9I7vf6qbOzVLh5Q9J+4/fD2JMzw8bImjnTjyu0ezbOs+qZ4bs6wflQ9Gb4Yry4l4Fz8xLjBNkXSzBgZES49U2p5Iz9ARTMoYPyD4Jl0815ElnhVUZd2YObENBQNfFYlzpDoH6QLLfMy1g/KPgrW5c39IVkenpclb6hXwfNadPEfqcn2CzbEU26dE+N7+a2LcA39I+CmMEOgTLBXDBLP3coGZTHNp3BUWYVl+ei61+qASB4/5XRVIEdDIXQOfoso0wEwy+g5pc82bpIJPmNkLQZqgwLos1HtZpDNd9p+WyWe1Q0dOxfj8SwE6Wlzh/VAv1PorcBijo1AiOp69BO/RV1tewwzDJm8QT1MC6MwuHc4aX02RFiCQBbb/AGWJdNKLtNGr1otU0CuxTj+Zo9NRPkTEKLGkkbF8b9DcF0Ac/JMq9GmxuhrRJBvuRyLm4RGBy4MphgJ8Tv6eAHRB9PJ7bJ6sfCPnGd5eGuIqVZ8hA+N1nWezFVhbMh7Dq97RDgdV7W3v0X1TGdlaL3anhzj4my7S7M0G7MCoh0ck/CNH1UUq2yx+HBdJuOAbiZ3hXUqum8yPvZddlTS3TJA2iZgeSJbhGtYGi0bWkb8haFhknZmc4tUKMViXl40iG8utb/xm6Iq1naCAZPF2g/4Uc1yo1Ha2hpf3Y1Pc1tjPDTFpGyT4nJsW9w1CkGN/RUeHTwSdMGDwkccibpX8lkexpW0ieGIZTc54aCNViQ7S0d0kkEyTPwI8YW5tm40aaYA0G4Ij3gdhtsCfGU6wOV4hjnanDS90u71yLe6IgdInYfDO572KxOIqud7VrKcd1hvedu6Ggbk3n52CxSapKh1KClbZlsxz9z5aDfaR85I36R5pK5xJkrc4b/Td496o30BTSj2AaPzyYFyLTPQHy5RXTyLfqYLgyGQ5waLC32YMmS6YPEAg9PRaPB585oe8NOtzdLJcNAkiSQPvccymGI7GsY2fa94ugdywA3kapKLPZdhAAHS+qCbX8PkrY4KdlM88ZLg+fO1l7nOlznOJJtckzITShlz5D+bW/wArW4Dswxmsvh0yG+AOwPqN1x2S1A8w4Bky0EyWjpKtUKKnlTMziG6jIHgeDPiOqsoYUnhaUdn5cXF+8bAcCAd0S3JyPzW8v8oLF7ivN7CTDYUjgplRplMqeAHX6K9mFHVOoJCObYExh6IhjD0RTaQ6qQYOqPahbKGs8Fa1isDQuqUSyIpqYprsrocpRLMO2vPI/wA/f0RDKxPj/N/DZIXVDMmfifKfBNsDVAgkgggifE7Egcz9FoaKEM8JiyCBsbxsfvlHVcY4iSYO8eHUDkR9hI69QNcQZHAO1/ofOdwrWYtmofAiZvFyD4m6RoZMcUMcTPHlf0VeKxTy4EF7YAaACA2Ph4dUMKgImbcH6AnhcdWjbm9/lfm/1QoayxmJjYGx5WsY+wPUBY5oncSfDw+vKaUM3axjWvmBADgCRHGqNvNLKLCmOaldAVcZCFqZxSdMPafJwKWYjMmfqCCQWOfxq6Mas9/xOn+ofFSGaU/1D4pqQLH4xa7+KKRtzOn+sfFWMzKn+oKUiWNnYn4hd/ElVPwrw3Vp4kibjzB5Sxma05jUBHUoUiWOfblR/EFewzNbQ6Yadjvq8R4Kiq6NgXeW+8beqlELH4rqFH8YhMxY6nTNVzQGNEuuJaPELPf/ACWh/wBRvxCNImzUuxk2ItZR/GeH0WXb2hof9Rp83BRf2mw4/Oz9wU0TZqm4ziw9RZQGPlZJ/a3DD/mM/cP7qh/bLDD/AJjP3BTQKZtPxx+yFz8efBYg9tcN+tn7gq3dtsN+tvxR0Smbr8eVw48rBO7c4f8AWPmq3dvcOPzfJx/hTRKZ9AOOPVROOd1Xz09v6HBJ/wDB39lW7/UGl/V+0qaDs+ifj3dV4449V85d2/Z+h/7So1u3Za4g0qgIsQWQQehB2Uomx82lAk3+7Su4OuWmIEOgGQLi/Ki4CFxhAIJEgcdVaypDQ1Bs4S0iJHHQ/FBYjDukQbA78X6BW/jx3hoDQ6AANh4qdZj2QSLG4QCVYOsdiJ8Zgjz63V34tu43tIJ+h48kKHQ4u5PxvuutcwHmErQbGQxc+VvSES2oS0zcQLDeLffolAcJF/iEUysb2ny6dFKJYPi8qpP7xa2ZA7zRYbzt5fBAns3SEucwG8QDxI26eacU3gkAb+KjiKh93Ybi6NsBmX9k6RJ0tcJOznHne8q93YuloZAeHyQ+Xd0N/KW3klNfaEEifGURSrWiZRAKR2Nw7GB9RrnEuIHfIaRHQGYmb+CXMyOm12oNdZ0t7zoEXABm/G61VR4i9/A33PC9XL3taNMtYRGkCxdJgxuLFRMjNni8aG0RUdaWhxAvuNgV8px/4TEV3Pc2k6bO1E6pHd48ALynWcurYlgpvD9AgdwObvYDu+VkmodmWsEtpuHQEEk+9eDc+66T4JYxodyTRtK+dtZRY2nTL9LWtaxjmnS0ABokkeCYszDDta1zz34Eghwh3IFt5WGpYV4gtY7kgtB43NuAmNB1QjvMedM7yIIcAd9zJFt7ouKFUmMM9xeIrU3sptaGwR3w9uoEQRtHzWMd2Np6NbmUw5zg3S1rxAJI1H8rfSdvNaLF4ioRDnG+1t77IYE794gnmY/q2RUaI5WV5Z2OoEsJp0hDXNLyJaDqBY8FrgHOEes32CLx3YdvsGM9lQ7jnudobpcS8ENJdyBbu3m3mqqNZ+oBpa4cN2F7cqb8TVpd4hzgXGW6nFvkYsVNkVCGrlGHY0tqYRvtATqPebBNxZhjaLEcTyUNiOz9J3fosDWiAQ46jJFoMDi3otLjs9NSmWMimW3IHPEtcfUQlTKhZEOuDqaY6/VFNgYobgKDWEOwzC60PDntI6S2Y6zYTO4hVYfLKcmQALcCxMSY+PwTQtJbcEajEkWJHQlRq4RzANQI5FwZB2MBMQXty9nu6WCY5Ez1BiNN7i23grBl9KDLbH83d42cBBtuInorWUwD3jYf2sr6GC1Bzr90WII22MDlC2SkBMylriAGxquAbkgEyQfQ+gVgwQbILRu7cEzIgjcSOdtwj8JTdr0scD0L+76yjcPgnOl72w2YDhsVLICDDYcANpMqCTL9bxoeG+6C1oE/xJXamB9o8vI1E9STaIAJkEwIv4IirhHNmBIKnSpvEEgj76qAogCpPNl5eUYxWXkLRYTMQ6npe3UY3suLyRkQkrblRBXV5EhN1ReoYoheXkSF4xYNi31CorVCZufVeXkFyTwepYktgkAqo17yLLy8iKT/ABZsDdM8LjXNBa3YkOMjlpkfNeXkAoLGbVN5HHEbGeFKjmb9Uw3g7c6nOHwLyuLyFBJNqOaxukju7SJMaw+J82heZiqmiJbERGncXsfSQvLylEAcZinFwJiwIt4kknzklADFFttxvB8V5eTIDPXc0GwjpufVVEviGvIHTdeXkSIGc2LkA3RuGxZDwdLZiNpsei8vIgBsVWdcEyA6RbZRxePL4DwDpEAgQV5eQCipz7SRJtv0XmFsWBBJ62HovLyjIjlVsEAesjqiKT6jxoFQgRtFoHh1Xl5QIPQeGOe10usYIMQRyvUM0qAxMheXkAn/2Q==")];

  recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  getAll() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
}