{
  /* <script
      type='text/javascript'
      src='https://app.mymusicstaff.com/Widget/v3/Registration.ashx?id=sch_xPSJS'
      className='sb_registration'
    ></script> */
}

// const Widget = (callback) => {
//   const existingScript = document.getElementsById('enroll_widget')
//   if (!existingScript) {
//     const widget
//     const script = document.createElement('script')
//     script.src = 'https://app.mymusicstaff.com/Widget/v3/Registration.ashx?id=sch_xPSJS'
//     script.id = 'enroll_widget'
//     document.body.appendChild(script)
//     script.onload = () => {
//       if (callback) callback()
//     }
//   }
//   if (existingScript && callback) callback()
// }

{
  /* <script type='text/javascript' src='https://app.mymusicstaff.com/Widget/v3/Registration.ashx?id=sch_xPSJS' class='sb_registration'></script> */
}

const Widget = () => {
  return (
    <div
      className='sb_registration'
      id='sb_registration'
      style={{
        overflow: 'hidden',
        maxWidth: '6000px',
        margin: '0, auto',
      }}
    >
      <h2 style={{ textAlign: 'left' }}>Free Trial</h2>
      <iframe
        id='sb_registration_if'
        src='//app.mymusicstaff.com/Widget/v3/content/en/index.html?id=sch_xPSJS&amp;accentColor=3A0A03&amp;accentTextColor=f0f0f088&amp;SameSite=Lax'
        allowtransparency='true'
        scrolling='yes'
        style={{
          minHeight: '950px',
        }}
        width='100%'
        height='750px'
        frameBorder='0'
      ></iframe>
    </div>
  )
}
export default Widget
