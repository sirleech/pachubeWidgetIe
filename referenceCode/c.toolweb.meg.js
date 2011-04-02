* PROCEDURE NAME: C.TOOLWEB.MEG/APPSUMMARY.HTML
* DV1DVOPR

    <script language="javaScript">
       function NewMWindow(URL) {
         vurl = "{{%TOOLWEB}}/dssdd/metaattrib.html?" + URL;
         newWindow = window.open(vurl,
                                 "MetaData",
                                 "resizable=yes,scrollbars=yes");
         newWindow.focus();
         }

       function JumpToVer(newVersion) {
         var jumpurl = "http://{{$WEB_HDR_PARM('HOST')}}-
                               {{$WEB_HDR_PARM('URL')}}?-
                        Ver="+newVersion;
         top.location = jumpurl;
         disableForm('frm');
       }
       ******************************************************************
       var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

       function loadFragmentInToElement(appName, pos) {
         var offSet = 220 ;
         if (pos > 30) offSet = 20;
         document.all("maD").style.top = startOfBody.scrollTop + offSet;

         var element = document.getElementById('maD');
         var fragment_url = '{{%toolweb}}/meg/appsummary.html' +
                            '?appName=' + appName +
                            '&ver={{%version.id}}';
         element.innerHTML = '<p><em>Loading ...</em></p>';
         xmlhttp.open("GET", fragment_url);
         xmlhttp.onreadystatechange = function() {
         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
           element.innerHTML = xmlhttp.responseText;
           }
         }
       xmlhttp.send(null);
       }
   </script>