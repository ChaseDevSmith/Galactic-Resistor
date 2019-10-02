class UsersController < ApplicationController
    def get_users
        users = User.all
        render json: users
    end

    def create_user
        user = User.find_by({ username: params[:name] })
        if !user
            user = User.create({
                username: params[:name],
                x: 0,
                y: 0,
                score: 0
            })
            render json: user
        end
    end

    def show
        user = User.find(params[:id])
        render json: user 
    end

    def update
        user = User.find(params[:id])
        user.update({
            x: params[:x],
            y: params[:y]
        })
        render json: user 
    end

    # def authenticate
	# 	@user = User.find_by({ username: params[:username] })
	# 	# byebug
    #     if @user && @user.authenticate(params[:password])#&& @user.valid?
    #         session[:current_user_id] = @user.id
	# 		redirect_to "/users/#{@user.id}"
	# 	else
	# 		flash.now[:alert] = "Email or password is invalid"
	# 		render 'login'
    #     end
	# end

end
