(function(h,o,u,n,d) {
    h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
    d=o.createElement(u);d.async=1;d.src=n
    n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
  })(window,document,'script','https://www.datadoghq-browser-agent.com/datadog-rum.js','DD_RUM')
  window.DD_RUM.onReady(function() {
    window.DD_RUM.init({
          clientToken: 'pub1121f959d17192baf886605834f1e298',
          applicationId: '32cfae72-f4a0-4090-8e55-891872619b37',
          sampleRate: 100,
          env: 'staging',
          version: '1.0.0',
      })
    })