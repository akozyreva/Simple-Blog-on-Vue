<template>
    <div>
        <!-- Trigger the modal with a button 
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>-->
        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Message</h4>
                    </div>
                    <div class="modal-body">
                        <p>{{ myMsg }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { eventBus } from '../main.js';

export default {
    props: ['msg'],
    data() {
        return {
            myMsg: this.msg
        }
    },
    created() {
        // while created, eventBus is listener on thi Vue
        eventBus.$on('textMsg', (data) => {
            this.myMsg = data;
        });
    }

}
</script>