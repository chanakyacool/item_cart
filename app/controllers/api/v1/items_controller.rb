class Api::V1::ItemsController < Api::V1::BaseController
  def index
    respond_with all_items
  end

  def create
    respond_with :api, :v1, Item.create(item_params) 
  end

  def destroy
    respond_with Item.destroy(params[:id]) 
  end

  def update
    item = Item.find(params['id'])
    item.update_attributes(item_params)
    respond_with item, json: item
  end 

  def search_items
    if search_params[:search]
      searched_items = Item.by_name_or_desc(search_params[:search])
      respond_with searched_items, json: searched_items
    else
      respond_with all_items
    end
  end

  private

  def item_params
    params.require(:item).permit(:id, :name, :description) 
  end 

  def search_params
    params.permit(:search)
  end

  def all_items
    Item.all
  end
end
