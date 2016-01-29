<style lang="sass">
.mt30 {
  margin-top:30px;
}
</style>

<template lang="jade">
  .container
    .row
      .col-md-4
      .col-md-4
        .panel.panel-default.mt30
          .panel-heading
            h4 请登录
          .panel-body
            form(v-on:submit.prevent="onSubmit")
              .form-group
                label
                | 用户名
                input.form-control(v-model='name')
              .form-group
                label
                | 密码
                input.form-control(type='password',v-model='password')
              .form-group.clearfix
                .checkbox.pull-left
                  label
                    input(type='checkbox',v-model='remember')
                    | 记住登录状态
                button.btn.btn-primary.pull-right(type='submit') 提交
      .col-md-4
</template>

<script>
import api from 'interface';

export default {
  data () {
    return {
      name:'user',
      password:'',
      remember:true
    }
  },
  methods:{
    onSubmit(){
      var param = {
        name:this.name,password:this.password
      }

      api('login',param).subscribe(data=>{
        data && (this.name = data.reg_date);
      },err=>{
        console.log(err);
      })
    }
  }
}
</script>
