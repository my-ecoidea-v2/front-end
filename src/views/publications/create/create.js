import Wave from '@/assets/elem/wave.svg'
import Footer from '@/components/layouts/footer/Footer.vue'

import router from '@/router'

export default {
  components: {
    Wave, 
    Footer
  },
  data: function () {
    return {
      type: 1,
      error: '',
      resume: '',
      description: '',
      keyword_1: '',
      keyword_2: '',
      keyword_3: '',
      link_1: '',
      link_2: '',
      link_3: '',
    }
  },
  methods: {
    typeChange: function() {
      this.type = $("input[name='type']:checked").val();
    },
    validated: function () {
      if (this.type == 1)
      {
        if (this.resume == '') { $('#resume').addClass('error'); this.error = 'Resumé vide'; return;
        } else { $('#resume').removeClass('error') }
        if (this.resume == '') { $('#resume').addClass('error'); this.error = 'Resumé vide'; return;
        } else { $('#description').removeClass('error') }
        if (this.description == '') { $('#description').addClass('error'); this.error = 'Description vide'; return;
        } else { $('#keyword_1').removeClass('error') }
        if (this.keyword_1 == '') { $('#keyword_1').addClass('error'); this.error = 'Resumé vide'; return;
        } else { $('#keyword_1').removeClass('error') }
        if (this.keyword_2 == '') { $('#keyword_2').addClass('error'); this.error = 'Resumé vide'; return;
        } else { $('#keyword_2').removeClass('error') }
        if (this.keyword_3 == '') { $('#keyword_3').addClass('error'); this.error = 'Resumé vide'; return;
        } else { $('#keyword_3').removeClass('error') }
        fetch('https://api.my-ecoidea.org/api/publication/create', {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          'Authorization': 'Bearer ' + localStorage.token
        },
        body: JSON.stringify({
          type: parseInt(this.type),
          anonyme: $("input[name='anonyme']:checked").val(),
          description: this.resume,
          texte: this.description,
          keyword_1: this.keyword_1,
          keyword_2: this.keyword_2,
          keyword_3: this.keyword_3,
          link_1: this.link_1,
          link_2: this.link_2,
          link_3: this.link_3,
        })
      })
      .then(response => { return response.text() })
      .then((data) => {
        if (Object.keys(JSON.parse(data)).includes('error')) {
          this.error = JSON.parse(data)['error']
        } else if (Object.keys(JSON.parse(data)).includes('token')) {
          router.push({path: '/publications/success'})
        }
      })
      }
    }
  }
}