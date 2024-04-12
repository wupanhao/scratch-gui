// Name: Consoles
// ID: sipcconsole
// Description: Blocks that interact with the JavaScript console built in to your browser's developer tools.
// By: -SIPC-
// License: MIT

/* generated l10n code */Scratch.translate.setup({"cs":{"_Error":"Chyba"},"de":{"_Consoles":"Konsolen","_Error":"Fehler","_Time":"Zeit"},"fr":{"_Error":"Erreur"},"hu":{"_Error":"Hiba"},"it":{"_Clear Console":"Svuota Console","_Consoles":"Console Javascript","_Create a collapsed group named [string]":"Crea il gruppo collassato [string]","_Create a group named [string]":"Crea il gruppo [string]","_End the timer named [string] and print the time elapsed from start to end":"Termina il timer [string]e stampa il tempo passato tra l'inizio e la fine","_Error":"Errore","_Error [string]":"Errore [string]","_Exit the current group":"Esci dal gruppo attuale","_Information":"Informazioni","_Information [string]":"Inserisci informazione [string]","_Print the time run by the timer named [string]":"Stampa il tempo indicato dal timer [string]","_Start a timer named [string]":"Avvia il timer [string]","_Time":"Unix Time","_Warning":"Avviso","_Warning [string]":"Avviso [string]","_group":"gruppo"},"ja":{"_Clear Console":"コンソールを消去","_Consoles":"コンソール","_Create a collapsed group named [string]":"[string]という名前の折りたたみグループを作る","_Create a group named [string]":"[string]という名前のグループを作る","_Debug":"デバッグ","_Debug [string]":"デバッグ [string]","_End the timer named [string] and print the time elapsed from start to end":"[string]という名前のついたタイマーを停止させ、開始時間と終了時間からかかった時間を表示する","_Exit the current group":"現在のグループを終了する","_Print the time run by the timer named [string]":"[string]という名前のついたタイマーのタイムを表示","_Start a timer named [string]":"[string]という名前のタイマーをスタートする","_Time":"時間","_group":"グループ"},"ja-hira":{"_Error":"エラー"},"ko":{"_Error":"오류"},"lt":{"_Error":"Klaida"},"nb":{"_Clear Console":"Tøm Konsoll","_Consoles":"Konsoller","_Create a collapsed group named [string]":"Opprett en sammenfoldet gruppe med navnet [string]","_Create a group named [string]":"Opprett en gruppe med navnet [string]","_End the timer named [string] and print the time elapsed from start to end":"Avslutt tidtakeren med navnet [string] og skriv ut tiden som har gått fra start til slutt.","_Error":"Feil","_Error [string]":"Feil [string]","_Exit the current group":"Avslutt gjeldende gruppe","_Information":"Informasjon","_Information [string]":"Informasjon [string]","_Print the time run by the timer named [string]":"Skriv ut tiden som kjøres av timeren med navnet [string]","_Start a timer named [string]":"Start en timer med navnet [string]","_Time":"Tid","_Warning":"Advarsel","_Warning [string]":"Advarsel [string]","_group":"gruppe"},"nl":{"_Clear Console":"console wissen","_Create a collapsed group named [string]":"creëer samengevouwen groep genaamd [string]","_Create a group named [string]":"creëer groep genaamd [string]","_Debug":"debug","_Debug [string]":"debug [string]","_End the timer named [string] and print the time elapsed from start to end":"beëindig timer genaamd [string] en print totale tijd ","_Error":"fout","_Error [string]":"fout [string]","_Exit the current group":"verlaat huidige groep","_Information":"informatie","_Information [string]":"informatie [string]","_Journal":"log","_Journal [string]":"log [string]","_Print the time run by the timer named [string]":"print tijd van timer genaamd [string]","_Start a timer named [string]":"begin timer genaamd [string]","_Time":"tijd","_Warning":"waarschuwing","_Warning [string]":"waarschuwing [string]","_group":"groep"},"pl":{"_Error":"Błąd"},"pt":{"_Error":"Erro"},"pt-br":{"_Error":"Erro"},"ru":{"_Clear Console":"Очистить консоль","_Consoles":"Консоль","_Create a collapsed group named [string]":"Создать свернутую группу названую [string]","_Create a group named [string]":"Создать группу называемую [string]","_Debug":"Отладка","_Debug [string]":"Отладка [string]","_End the timer named [string] and print the time elapsed from start to end":"Завершить работу таймера с именем [string] и вывести время, прошедшее от начала до конца","_Error":"Ошибка","_Error [string]":"Ошибка [string]","_Exit the current group":"Выйти из текущей группы","_Information":"Информация","_Information [string]":"Информация [string]","_Journal":"Журнал","_Journal [string]":"Журнал [string]","_Print the time run by the timer named [string]":"Вывести время, затраченное таймером названным [string]","_Start a timer named [string]":"Начать таймер названным [string]","_Time":"Время","_Warning":"Предупреждение","_Warning [string]":"Предупреждение [string]","_group":"группа"},"sl":{"_Error":"Napaka"},"sv":{"_Error":"Fel"},"tr":{"_Consoles":"Konsollar","_Error":"Hata","_Time":"Zaman"},"uk":{"_Error":"Помилка"},"zh-cn":{"_Clear Console":"清空控制台","_Consoles":"控制台","_Create a collapsed group named [string]":"创建名叫[string]的折叠群组","_Create a group named [string]":"创建名叫[string]的群组","_Debug [string]":"Debug[string]","_End the timer named [string] and print the time elapsed from start to end":"结束名为[string]的计时器并打印从开始到结束所用的时间","_Error":"错误","_Error [string]":"打印错误[string]","_Exit the current group":"退出群组","_Information":"信息","_Information [string]":"打印信息[string]","_Journal":"日志","_Journal [string]":"输出日志[string]","_Print the time run by the timer named [string]":"打印计时器[string]运行的时间","_Start a timer named [string]":"启动计时器[string]","_Time":"时间","_Warning":"警告","_Warning [string]":"打印警告[string]","_group":"群组"},"zh-tw":{"_Error":"錯誤"}});/* end generated l10n code */(function (Scratch) {
  "use strict";
  const icon =
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MS41NTIwNyIgaGVpZ2h0PSI4MC42MDMwOCIgdmlld0JveD0iMCwwLDgxLjU1MjA3LDgwLjYwMzA4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk5LjIyMzk3LC0xNDAuNjk4NDYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI4MC43NzYwMywxODFjMCwyMi4yNTc5MiAtMTguMjU2MDUsNDAuMzAxNTQgLTQwLjc3NjAzLDQwLjMwMTU0Yy0yMi41MTk5OCwwIC00MC43NzYwMywtMTguMDQzNjEgLTQwLjc3NjAzLC00MC4zMDE1NGMwLC0yMi4yNTc5MiAxOC4yNTYwNSwtNDAuMzAxNTQgNDAuNzc2MDMsLTQwLjMwMTU0YzIyLjUxOTk4LDAgNDAuNzc2MDMsMTguMDQzNjEgNDAuNzc2MDMsNDAuMzAxNTR6IiBmaWxsPSIjODA4MDgwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjY2LjE2NTgzLDE2Mi4xOTM1NnYyOS4yMDMwMWMwLDIuMjU4MzMgLTEuODMwNTksNC4wODg0MSAtNC4wODg0MSw0LjA4ODQxaC00NC4xNTQ4NWMtMi4yNTgzMywwIC00LjA4ODQxLC0xLjgzMDA3IC00LjA4ODQxLC00LjA4ODQxdi0yOS4yMDMwMWMwLC0yLjI1ODMzIDEuODMwMDcsLTQuMDg4NDEgNC4wODg0MSwtNC4wODg0MWg0NC4xNTQ4NWMyLjI1NzgzLDAgNC4wODg0MSwxLjgzMDA3IDQuMDg4NDEsNC4wODg0MXpNMjYyLjM1NTk1LDE2NC42NDUwOGMwLC0xLjM0MjAyIC0xLjA4ODAzLC0yLjQzMDA1IC0yLjQzMDA1LC0yLjQzMDA1aC0zOS44NTEyOGMtMS4zNDIwMiwwIC0yLjQzMDA1LDEuMDg4MDMgLTIuNDMwMDUsMi40MzAwNXYyNC4yOTk0N2MwLDEuMzQyMDIgMS4wODgwMywyLjQzMDA1IDIuNDMwMDUsMi40MzAwNWg3Ljc3NDYzdi0xMC4yMDU2OWMwLC0xLjM0MjU0IDEuMDg4MDMsLTIuNDMwMDUgMi40MzAwNSwtMi40MzAwNWMxLjM0MjU0LDAgMi40MzAwNSwxLjA4ODAzIDIuNDMwMDUsMi40MzAwNXYxMC4yMDU2OWg0Ljg2MDF2LTE4Ljk1Mzg4YzAsLTEuMzQyMDIgMS4wODgwMywtMi40MzAwNSAyLjQzMDA1LC0yLjQzMDA1YzEuMzQyNTQsMCAyLjQzMDA1LDEuMDg4MDMgMi40MzAwNSwyLjQzMDA1djE4Ljk1Mzg4aDQuODYwMXYtMTQuMDkzNzhjMCwtMS4zNDIwMiAxLjA4ODAzLC0yLjQzMDA1IDIuNDMwMDUsLTIuNDMwMDVjMS4zNDI1NCwwIDIuNDMwMDUsMS4wODgwMyAyLjQzMDA1LDIuNDMwMDV2MTQuMDkzNzhoNy43NzYxNmMxLjM0MjAyLDAgMi40MzAwNSwtMS4wODgwMyAyLjQzMDA1LC0yLjQzMDA1ek0yNTMuMDgyOTIsMjAxLjU1ODgzYzAsMS4yOTA0MSAtMS4wNDYxMiwyLjMzNjAyIC0yLjMzNjAyLDIuMzM2MDJoLTIxLjQ5MzhjLTEuMjg5ODksMCAtMi4zMzYwMiwtMS4wNDU2MSAtMi4zMzYwMiwtMi4zMzYwMmMwLC0xLjI4OTg5IDEuMDQ1NjEsLTIuMzM2MDIgMi4zMzYwMiwtMi4zMzYwMmgyMS40OTM4YzEuMjg5ODksMCAyLjMzNjAyLDEuMDQ2MTMgMi4zMzYwMiwyLjMzNjAyek0yNTAuNzQ2OSwxOTkuMjIyODEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjQwLjc3NjAzMzMzMzMzMzQ6MzkuMzAxNTM5OTk5OTk5OTYtLT4=";
  const icon2 =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjczNzk0NjIzOTU3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0NDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTk0NC4zOCA3MC4xOWgtODY0Yy00NC4xOSAwLTgwIDM1LjgxLTgwIDgwdjU3MS40M2MwIDQ0LjE5IDM1LjgxIDgwIDgwIDgwaDg2NGM0NC4xOCAwIDgwLTM1LjgxIDgwLTgwVjE1MC4xOWMwLTQ0LjE5LTM1LjgyLTgwLTgwLTgweiBtNS40NSA2MDMuNDVjMCAyNi4yNi0yMS4yOSA0Ny41NS00Ny41NSA0Ny41NUg3NTAuMTJWNDQ1LjQxYzAtMjYuMjYtMjEuMjgtNDcuNTUtNDcuNTUtNDcuNTUtMjYuMjYgMC00Ny41NSAyMS4yOS00Ny41NSA0Ny41NXYyNzUuNzhoLTk1LjFWMzUwLjMxYzAtMjYuMjYtMjEuMjgtNDcuNTUtNDcuNTUtNDcuNTUtMjYuMjYgMC00Ny41NSAyMS4yOS00Ny41NSA0Ny41NXYzNzAuODhoLTk1LjF2LTE5OS43YzAtMjYuMjYtMjEuMjgtNDcuNTUtNDcuNTUtNDcuNTUtMjYuMjYgMC00Ny41NSAyMS4yOC00Ny41NSA0Ny41NXYxOTkuN0gxMjIuNDljLTI2LjI2IDAtNDcuNTUtMjEuMjktNDcuNTUtNDcuNTVWMTk4LjE2YzAtMjYuMjYgMjEuMjktNDcuNTUgNDcuNTUtNDcuNTVoNzc5Ljc5YzI2LjI2IDAgNDcuNTUgMjEuMjkgNDcuNTUgNDcuNTV2NDc1LjQ4ek03MjIuNjcgODc0Ljc2SDMwMi4wOWMtMjUuMjUgMC00NS43MSAyMC40Ny00NS43MSA0NS43MSAwIDI1LjI1IDIwLjQ3IDQ1LjcxIDQ1LjcxIDQ1LjcxaDQyMC41OGMyNS4yNCAwIDQ1LjcxLTIwLjQ2IDQ1LjcxLTQ1LjcxIDAtMjUuMjQtMjAuNDctNDUuNzEtNDUuNzEtNDUuNzF6IG0wIDAiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjQ0NDEiPjwvcGF0aD48L3N2Zz4=";
  class Consoles {
    constructor() {}
    getInfo() {
      return {
        id: "sipcconsole",
        name: Scratch.translate("Consoles"),
        color1: "#808080",
        color2: "#8c8c8c",
        color3: "#999999",
        menuIconURI: icon,
        blockIconURI: icon2,
        blocks: [
          {
            opcode: "Emptying",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("Clear Console"),
            arguments: {},
          },
          {
            opcode: "Information",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("Information [string]"),
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Information"),
              },
            },
          },
          {
            opcode: "Journal",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("Journal [string]"),
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Journal"),
              },
            },
          },
          {
            opcode: "Warning",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("Warning [string]"),
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Warning"),
              },
            },
          },
          {
            opcode: "Error",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("Error [string]"),
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Error"),
              },
            },
          },
          {
            opcode: "debug",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("Debug [string]"),
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Debug"),
              },
            },
          },

          "---",
          {
            opcode: "group",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("Create a group named [string]"),
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("group"),
              },
            },
          },
          {
            opcode: "groupCollapsed",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("Create a collapsed group named [string]"),
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("group"),
              },
            },
          },
          {
            opcode: "groupEnd",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("Exit the current group"),
            arguments: {},
          },
          "---",
          {
            opcode: "Timeron",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("Start a timer named [string]"),
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Time"),
              },
            },
          },
          {
            opcode: "Timerlog",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "Print the time run by the timer named [string]"
            ),
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Time"),
              },
            },
          },
          {
            opcode: "Timeroff",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "End the timer named [string] and print the time elapsed from start to end"
            ),
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Time"),
              },
            },
          },
        ],
      };
    }
    Emptying() {
      console.clear();
    }
    Information({ string }) {
      console.info(string);
    }
    Journal({ string }) {
      console.log(string);
    }
    Warning({ string }) {
      console.warn(string);
    }
    Error({ string }) {
      console.error(string);
    }
    debug({ string }) {
      console.debug(string);
    }
    group({ string }) {
      console.group(string);
    }
    groupCollapsed({ string }) {
      console.groupCollapsed(string);
    }
    groupEnd() {
      console.groupEnd();
    }
    Timeron({ string }) {
      console.time(string);
    }
    Timerlog({ string }) {
      console.timeLog(string);
    }
    Timeroff({ string }) {
      console.timeEnd(string);
    }
  }
  Scratch.extensions.register(new Consoles());
})(Scratch);
