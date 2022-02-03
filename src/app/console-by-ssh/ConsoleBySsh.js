import React from 'react';

export default function ConsoleBySsh(){
    return(
        <div>
             <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Console Access By SSH</h4>
                    <div class="form-group float-right">
                        <label for="switcherySize10" class="mr-1">Disconnected</label>
                        <input type="checkbox" id="switcherySize10" class="switchery switchery-warning" data-size="lg" checked />
                        <label for="switcherySize10" class="ml-1">Connected</label>
                    </div>
                </div>
                <div class="card-content">
                    <div class="card-body bg-dark" >
                       input
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}