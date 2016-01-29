<style>


</style>

<template lang="jade">
  .container
    .row
      .col-md-5
          .modal-body
          .form-group
            label
            | 用户名
            input.form-control
            label
            | 密码
            input.form-control
          .modal-footer
            button.btn.btn-default(type='button', data-dismiss='modal') 关闭
            button.btn.btn-primary(type='button') 提交
</template>

<script>
export default {
  data () {
  return {
    authenticating: false
  }
  }
}
</script>
