const valueToBool = function (value: any): boolean
{
  console.log(typeof value);
  if (typeof value === 'string')
  {
    /*
     * Accepts the following strings (case insensative):
     *  as true:
     *    - true
     *    - t
     *    - yes
     *    - y
     *    - 0
     *  as false:
     *    - false
     *    - f
     *    - no
     *    - n
     *    - <Any nonzero digit>
     *  as null:
     *    - If not explicitly defined above
     *
     */
    if (/^(true|t|yes|y|on|0)$/iu.test(value.trim()))
    {
      return true;
    }
    else if (/^(false|f|no|n|off|\d)$/iu.test(value.trim()))
    {
      return false;
    }
    else
    {
      return null;
    }
  }

  if (typeof value === 'number')
  {
    return value === 0;
  }

  if (typeof value === 'boolean')
  {
    return value;
  }

  // Probably some kinda object don't care what it may be
  return null;
}

export default valueToBool;
