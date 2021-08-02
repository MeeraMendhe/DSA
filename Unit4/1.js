function AlfaNumeric(a)
{
  let string=a.toString();
  let result=string.charCodeAt(0);
  if(result>=48&&result<=57||result>=65&&result<=90||result>=97&&
    result<=122)
  {
    return true
  }
  else
  {
    return false
  }
}


function Priority(a)
{
  if(a=="^")
  {
    return 3
  }
  else if(a=="*"||a=="/")
  {
    return 2
  }
  else if(a=="+"||a=="-")
  {
    return 1
  }
  else if(a=="(")
  {
    return 0
  }
}