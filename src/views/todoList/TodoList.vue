<script lang="ts" setup>
import { ref, computed } from "vue";

</script>

<template>
    <div class="todo-list">
        <main class="container">
            <header class="heading">
                <div class="title">To-Do List</div>
            </header>
            <div class="form-field">
                <h1 class="title">~ Today I need to ~</h1>
                <form class="form-wrapper">
                    <div class="form-input">
                        <input placeholder="Add new todo...">
                    </div>
                    <button type="submit" class="submit-btn"><span>Submit</span></button>
                </form>
            </div>
            <ul class="todos">
                <li class="todos-item">
                    <button class="checkbox-btn">
                        <div class="checkbox"></div>
                    </button>
                    <p class="content">3456</p>
                    <button class="close-btn">
                    </button>
                </li>
            </ul>
            <footer class="options"><span>9 item left</span>
                <div class="filters"><span class="option active">All</span>
                </div>
            </footer>
        </main>
    </div>
</template>

<style lang="scss" scoped>
*,
*:after,
*:before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Yanone Kaffeesatz", sans-serif;
}

button,
input {
    outline: none;
    border: none;
}

button {
    background-color: transparent;
    cursor: pointer;
}

.todo-list {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 50px 0;
    margin: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(90deg, #ffafbd, #ffc3a0);
    background-repeat: no-repeat;
    z-index: 1;
    color: #494a4b;

    .container {
        padding: 30px 40px 20px;
        text-align: center;
        width: 440px;
        max-width: 100%;
        margin: 0 auto;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        background: #f2f2f2;

        .heading {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .form-field {
            margin-top: 25px;

            .title {
                font-size: 22px;
                margin-bottom: 18px;
            }

            .form-wrapper {
                display: flex;
                justify-content: center;

                .form-input {
                    display: inline-block;
                    flex-grow: .65;
                    margin-right: 15px;

                    & input {
                        width: 100%;
                        border-bottom: 3px dashed #fe7345;
                        padding: 5px 0 3px;
                        font-size: 18px;
                        background: transparent;
                    }
                }

                .submit-btn {
                    position: relative;
                    transform: rotate(4deg);
                    border-radius: 6px;
                    transition: transform .25s cubic-bezier(.175, .885, .32, 1.275);

                    & span {
                        position: relative;
                        display: block;
                        font-size: 16.5px;
                        padding: 0.34em 0.84em;
                        border: 2px solid #494a4b;
                        border-radius: inherit;
                        background-color: #fff;
                    }

                    &:before {
                        position: absolute;
                        left: 0;
                        top: 0;
                        content: "";
                        width: 100%;
                        height: 100%;
                        transform: scaleY(1.1);
                        border: 1px solid #494a4b;
                        border-radius: inherit;
                        transform-origin: top;
                        background-image: url(data:image/png;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==);
                        background-color: #fe7345;
                        transition: transform .25s cubic-bezier(.175, .885, .32, 1.275);
                    }

                    &:active {
                        transform: rotate(0);
                    }
                }
            }
        }

        .todos {
            margin-top: 40px;
            perspective: 350px;

            .todos-item {
                display: flex;
                align-items: center;
                padding: 8px 10px 8px 0;
                border-radius: 5px;
                cursor: pointer;

                & .checkbox-btn {
                    padding: 0 8px;
                }

                & .content {
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    padding-right: 7px;
                }

                & .close-btn {
                    margin: 0 -8px 0 auto;
                    padding: 0 8px;
                }
            }
        }

        .options {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 100px;
            gap: 20px;
        }
    }
}
</style>